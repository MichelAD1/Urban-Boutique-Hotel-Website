<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\Request;

class DiscountController extends Controller
{
    public function addWholeDiscount(Request $request){//size/discount
        $rooms = Room::where('size',$request->size);
        for($i=0;$i<sizeof($rooms);$i++){
            $room = $rooms[$i];
            $room->discount = $request->discount;
            $room->save();
        }

        return response()->json([
            'message'=>'discount added successfuly'
        ]);

    }
    public function addRoomDiscount(Request $request){//room_id,discount
        $room = Room::find($request->room_id);
        $room->discount= $request->discount;

        if($room->save()){
            return response()->json([
                'message'=>`discount added to all rooms of size $request->size`
            ]);
        }
    }
    public function removeWholeDiscount($size){
        $rooms = Room::where('size',$size);
        for($i=0;$i<sizeof($rooms);$i++){
            $room = $rooms[$i];
            $room->discount = 0;
            $room->save();
        }

        return response()->json([
            'message'=>`Discount removed from all rooms of size $size`
        ]);

    }
    public function removeRoomDiscount($room_id){
        $room = Room::find($room_id);
        $room->discount=0;
        if($room->save()){
            return response()->json([
                'message'=>'discount removed successfuly'
            ]);
        }
    }
}
