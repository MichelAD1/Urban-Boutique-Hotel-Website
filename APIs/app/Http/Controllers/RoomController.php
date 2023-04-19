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
    $rooms = Room::all();

    // Get reservations for all rooms for the next week
    $reservations = DB::table("customer_reserves_room")->whereBetween('reservation_date', [Carbon::today(), Carbon::today()->addDays(7)])
        ->orWhereBetween('reservation_end', [Carbon::today(), Carbon::today()->addDays(300)])
        ->get();

    // Initialize an array to store the occupied room dates
    $occupiedRoomDates = [];

    // Loop through all the reservations and populate the occupiedRoomDates array
    foreach ($reservations as $reservation) {
        $roomDates = CarbonPeriod::create($reservation->reservation_date, $reservation->reservation_end)->toArray();
        if (isset($occupiedRoomDates[$reservation->room_id])) {
            $occupiedRoomDates[$reservation->room_id] = array_merge($occupiedRoomDates[$reservation->room_id], $roomDates);
        } else {
            $occupiedRoomDates[$reservation->room_id] = $roomDates;
        }
    }

    // Loop through all the rooms and find the free dates for each room
    $freeRoomDates = [];
    foreach ($rooms as $room) {
        $occupiedDates = isset($occupiedRoomDates[$room->id]) ? $occupiedRoomDates[$room->id] : [];
        $freeDates = [];
        $currentDate = Carbon::today();
        $endDate = Carbon::today()->addDays(300);
        while ($currentDate <= $endDate) {
            if (!in_array($currentDate->format('Y-m-d'), $occupiedDates)) {
                $freeDates[] = $currentDate->format('Y-m-d');
            }
            $currentDate->addDay();
        }
        $freeRoomDates[] = [
            'room' => $room,
            'free_dates' => $freeDates
        ];
    }



    }

}
