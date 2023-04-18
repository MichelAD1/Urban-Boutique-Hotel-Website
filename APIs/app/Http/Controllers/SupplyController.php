<?php

namespace App\Http\Controllers;

use App\Models\Supply;
use Illuminate\Http\Request;

class SupplyController extends Controller
{
    public function addNewSupplyItem(Request $request){
        $supply = new Supply();
        $supply->item_name = $request->item_name;
        $supply->item_amount = $request->item_amount;
        if($supply->save()){
            return response()->json([
                'message'=>`$request->item_amount of $request->item_name has been added to stock`
            ]);
        }
    }
    public function IncreaseAmount(Request $request){
        $supply = Supply::find($request->supply_id);
        $supply->item_amount = $supply->item_amount + $request->amount;
        if($supply->save()){
            return response()->json([
                'message'=>`$supply->item_amount of $request->item_name has been added to stock`
            ]);
        }
    }
    public function editName(Request $request){
        $supply = Supply::find($request->supply_id);
        $supply->item_name = $request->item_name;
        if($supply->save()){
            return response()->json([
                'message'=>`$supply->item_amount of $request->item_name has been added to stock`
            ]);
        }
    }
    public function deleteItem($supply_id){
        Supply::find($supply_id)->delete();
    }
}
