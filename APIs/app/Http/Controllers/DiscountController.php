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
    }
    public function addRoomDiscount(Request $request){//room_id,discount
        $room = Room::find($request->room_id);
        $room->discount= $request->discount;

        if($room->save()){
            return response()->json([
                'message'=>'discount added successfuly'
            ]);
        }
    }
}
