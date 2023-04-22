<?php

namespace App\Http\Controllers;

use App\Models\Maintenance_Request;
use Illuminate\Http\Request;

class MaintenanceRequestController extends Controller
{
    public function addRequest(Request $request){
        Maintenance_Request::create([
            'customer_id'=>$request->requestid,
            'reservation_id'=>$request->reservation_id,
            'room_id'=>$request->room_id,
            'status'=>'pending'
        ]);
        return "success";
    }
    public function removeRequest($requestid){
        Maintenance_Request::find($requestid)->delete();
        return "Success";
    }

    public function getRequests(){
        return Maintenance_Request::all();
    }
}
