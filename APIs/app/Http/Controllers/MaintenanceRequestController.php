<?php

namespace App\Http\Controllers;

use App\Models\Maintenance_Request;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use stdClass;

class MaintenanceRequestController extends Controller
{
    public function addRequest(Request $request){
        $user = Auth::user();
        Maintenance_Request::create([
            'customer_id'=>$user->id,
            'reservation_id'=>$request->reservation_id,
            'room_id'=>$request->room_id,
            'employee_id'=> 0,
            'status'=>'pending',
        ]);
        return "success";
    }
    public function completeRequest($requestid){
        $maintenance=Maintenance_Request::find($requestid);
        $maintenance->status="completed";
        $maintenance->save();
        return "Success";
    }

    public function getPendingRequests(){
        $maintenanceRequests = Maintenance_Request::where('maintenance__requests.status', '=', 'pending')
        ->join('users', 'users.id', '=', 'maintenance__requests.customer_id')
        ->join('customers', 'customers.user_id', '=', 'maintenance__requests.customer_id')
        ->join('rooms', 'rooms.id', '=', 'maintenance__requests.room_id')
        ->join('customer_reserves_room', 'customer_reserves_room.id', '=', 'maintenance__requests.reservation_id')
        ->get();

        return $maintenanceRequests;
    }
    public function getAllRequests(){
        return Maintenance_Request::all();
    }
}
