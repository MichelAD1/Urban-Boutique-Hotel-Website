<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Google\Cloud\Storage\StorageClient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    public function uploadRoomImages(Request $request){
        $roomid = $request->roomid;
        $images = $request->images;
        $storage = new StorageClient([
            'projectId' => 'urban-boutique-hotel',
                'keyFilePath' => 'C:\Users\marc issa\Desktop\Urban Boutique Hotel\Urban-Boutique-Hotel-Website\APIs\urban-boutique-hotel-firebase-adminsdk-q0nzf-fb3292fd25.json'
        ]);
        $bucket = $storage->bucket('urban-boutique-hotel.appspot.com');
        if(!empty($images)){
            for($i=0;$i<sizeof($images);$i++){
                $base64image = $images[$i];
                $image = new Image();
                $image->room_id = $roomid;
                $imageData = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $base64image));
                $filename = uniqid() . '.png';
                $foldername = "RoomImages/";
                $object = $bucket->upload($imageData, [
                    'name' => $foldername.$filename
                ]);
                $url = $object->signedUrl(new \DateTime('+100 years'));
                $image->image_url = $url;
                $image->save();
            }
        }

    }
    public function addAndRemoveImages(Request $request){ // images_removed/images_added
        $storage = new StorageClient([
            'projectId' => 'urban-boutique-hotel',
            'keyFilePath' => 'C:\Users\miche\Downloads\urban_boutique_hotel\Urban-Boutique-Hotel-Website\APIs\urban-boutique-hotel-firebase-adminsdk-q0nzf-fb3292fd25.json'
        ]);
        $bucket = $storage->bucket('urban-boutique-hotel.appspot.com');
        if($request->has("images_added")){
            $images = $request->images_added;
            $roomid = $request->room_id;
            if(!empty($images)){
                for($i=0;$i<sizeof($images);$i++){
                    $base64image = $images[$i];
                    $image = new Image();
                    $image->room_id = $roomid;
                    $imageData = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $base64image));
                    $filename = uniqid() . '.png';
                    $foldername = "RoomImages/";
                    $object = $bucket->upload($imageData, [
                        'name' => $foldername.$filename
                    ]);
                    $url = $object->signedUrl(new \DateTime('+100 years'));
                    $image->image_url = $url;
                    $image->save();
                }
            }
        }
        if($request->has("images_removed")){
            $images = $request->images_removed;
            $folder_name = "RoomImages/";
            if(!empty($images)){
                for($i=0;$i<sizeof($images);$i++){
                    $imageid = $images[$i];
                    $image = Image::find($imageid);
                    $url = $image->image_url;
                    if (preg_match('/([\w]+.(png|jpg|jpeg|gif))/', $url, $matches)) {
                        $filename = $matches[1];
                        $overallpath = $folder_name.$filename;
                        $object = $bucket->object($overallpath);
                        $object->delete();
                        $image->delete();
                    }

                }
            }
        }
        return Image::where("room_id",$request->room_id)->get();
    }

}
