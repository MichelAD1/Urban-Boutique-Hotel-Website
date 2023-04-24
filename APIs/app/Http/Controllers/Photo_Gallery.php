<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Google\Cloud\Storage\StorageClient;
use Illuminate\Http\Request;

class Photo_Gallery extends Controller
{
    public function addAndRemoveImages(Request $request){ // images_removed/images_added
        $storage = new StorageClient([
            'projectId' => 'meno-a6fd9',
            'keyFilePath' => 'C:\Users\marc issa\Desktop\Meno\MENO\APIs\meno-a6fd9-firebase-adminsdk-dv2i6-bbf9790bcf.json'
        ]);
        $bucket = $storage->bucket('your-bucket-name');
        if($request->has("images_added")){
            $images = $request->images_added;

            if(!empty($images)){
                for($i=0;$i<sizeof($images);$i++){
                    $base64image = $images[$i];
                    $image = new Image();
                    $image->room_id = 0;
                    $imageData = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $base64image));
                    $filename = uniqid() . '.png';
                    $foldername = "gallery/";
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
            $images = $request->images_added;

            $folder_name = "gallery/";
            if(!empty($images)){
                for($i=0;$i<sizeof($images);$i++){
                    $image = $images[$i];
                    $url = $image->image_url;
                    if (preg_match('/([\w]+\.(png|jpg|jpeg|gif))/', $url, $matches)) {
                        $filename = $matches[1];
                        $overallpath = $folder_name.$filename;
                        $object = $bucket->object($overallpath);
                        $object->delete();
                    }

                }
            }
        }
    }
    public function getImages(){
        return Image::where('room_id','=',0)->get();
    }
}
