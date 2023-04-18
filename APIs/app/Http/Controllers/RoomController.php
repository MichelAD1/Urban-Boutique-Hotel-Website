<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    public function addRoom(Request $request){
        $room = new Room();
        $room->title = $request->title;
        $room->description = $request->description;
        $room->rent = $request->rent;
        $room->size = $request->size;
        $room->guests = $request->guests;
        $room->floor = $request->floor;
        $room->beds = $request->beds;
        if($room->save()){
            return response()->json([
                'message'=>'room added successfully'
            ]);
        }
    }
    public function removeRoom($roomid){
        if(Room::find($roomid)->delete()){
            return response()->json([
                'message'=>'room deleted successfully'
            ]);
        }
    }
    public function editRoom(Request $request){
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
        if($room->save()){
            return response()->json([
                'message'=>'room added successfully'
            ]);
        }
    }

}
