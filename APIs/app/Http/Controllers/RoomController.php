<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Room;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Google\Cloud\Storage\StorageClient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RoomController extends Controller
{
    public function addRoom(Request $request){
        //admin function
        $room = new Room();
        $room->title = $request->title;
        $room->description = $request->description;
        $room->rent = $request->rent;
        $room->size = $request->size;
        $room->guests = $request->guests;
        $room->floor = $request->floor;
        $room->beds = $request->beds;
        $room->wifi = $request->wifi;
        $room->tv = $request->tv;
        $room->shower = $request->shower;
        $room->towels = $request->towels;
        $room->mini_bar = $request->mini_bar;
        $room->desk = $request->desk;
        $room->featured = false;
        $room->discount = 0;
        if($room->save()){
            $roomid = $room->id;
            $images = $request->images;
            $storage = new StorageClient([
                'projectId' => 'meno-a6fd9',
                'keyFilePath' => 'C:\Users\marc issa\Desktop\Meno\MENO\APIs\meno-a6fd9-firebase-adminsdk-dv2i6-bbf9790bcf.json'
            ]);
            $bucket = $storage->bucket('your-bucket-name');
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
            return response()->json([
                'message'=>'room added successfully'
            ]);
        }
    }
    public function removeRoom($roomid){
        //admin function

        if(Room::find($roomid)->delete()){
            $storage = new StorageClient([
                'projectId' => 'meno-a6fd9',
                'keyFilePath' => 'C:\Users\marc issa\Desktop\Meno\MENO\APIs\meno-a6fd9-firebase-adminsdk-dv2i6-bbf9790bcf.json'
            ]);
            $bucket = $storage->bucket('your-bucket-name');
            $images = Image::where('room_id',$roomid)->get();
            $folder_name = "RoomImages/";
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
            return response()->json([
                'message'=>'room deleted successfully'
            ]);
        }
    }
    public function editRoom(Request $request){
        //admin function
        $room = Room::find($request->room_id);
        if($request->has("title")){
            $room->title=$request->title;
        }
        if($request->has('description')){
            $room->description=$request->description;
        }
        if($request->has("rent")){
            $room->rent=$request->rent;
        }
        if($request->has("size")){
            $room->size=$request->size;
        }
        if($request->has("guests")){
            $room->guests=$request->guests;
        }
        if($request->has("floor")){
            $room->floor=$request->floor;
        }
        if($request->has("beds")){
            $room->beds=$request->beds;
        }
        if($request->has("tv")){
            $room->tv=$request->tv;
        }
        if($request->has("shower")){
            $room->shower=$request->shower;
        }
        if($request->has("wifi")){
            $room->wifi=$request->wifi;
        }
        if($request->has("towels")){
            $room->towels=$request->towels;
        }
        if($request->has("mini_bar")){
            $room->mini_bar=$request->mini_bar;
        }
        if($request->has("desk")){
            $room->desk=$request->desk;
        }

        if($room->save()){
            return response()->json([
                'message'=>'room added successfully'
            ]);
        }
    }

    public function getRooms(){
        //customer and admin function
        //returns all rooms with their schedule
        // Get all the rooms
        // Get all the rooms
        $rooms = Room::all();

        // Get reservations for all rooms for the next week
        $reservations = DB::table("customer_reserves_room")->get();
        // Initialize an array to store the occupied and free dates for each room
        $roomDates = [];

        // Loop through all the rooms and find the free and occupied dates for each room
        foreach ($rooms as $room) {
            // Get the reservations for this room for the next week
            $roomReservations = $reservations->where('room_id', $room->id);

            // Initialize arrays to store the occupied and free dates for this room
            $occupiedDates = [];
            $freeDates = [];

            // Loop through each day of the next week and check if it's occupied
            $currentDate = Carbon::today();

            $endDate = Carbon::today()->addDays(50);
            while ($currentDate <= $endDate) {
                $isOccupied = false;
                foreach ($roomReservations as $reservation) {
                    $reservationDates = CarbonPeriod::create($reservation->reservation_date, $reservation->reservation_end)->toArray();

                    if (in_array($currentDate, $reservationDates)) {

                        $occupiedDates[] = $currentDate->format('Y-m-d');
                        $isOccupied = true;
                        break;
                    }
                }
                if (!$isOccupied) {
                    $freeDates[] = $currentDate->format('Y-m-d');
                }
                $currentDate->addDay();
            }
            $images = Image::where('room_id',$room->id)->get();
            // Add the occupied and free dates for this room to the roomDates array
            $roomDates[] = [
                'room' => $room,
                'occupied_dates' => $occupiedDates,
                'free_dates' => $freeDates,
                'images'=>$images

            ];
        }

        // Return the roomDates array as JSON
        return response()->json($roomDates);

    }

}