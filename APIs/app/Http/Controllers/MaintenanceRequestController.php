<?php

namespace App\Http\Controllers;

use App\Models\Maintenance_Request;
use App\Models\Room;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
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
        $maintenancereq=Maintenance_Request::find($requestid);
        $maintenancereq->status="completed";
        $maintenancereq->save();
        return response()->json([
            'message'=>'success',
            'maintenance_object'=>$maintenancereq,
            'customer_object'=> User::join('customers','customers.user_id','=','users.id')
                                    ->where('users.id','=',$maintenancereq->customer_id)->get(),
            'reservation_object'=> DB::table('customer_reserves_room')->where('customer_reserves_room.id','=',$maintenancereq->reservation_id)->get(),
            'room_object'=>Room::find($maintenancereq->room_id),
            'employee_object'=>User::join('staff','staff.user_id','=','users.id')
            ->where('users.id','=',$maintenancereq->customer_id)->get()


        ]);
    }
    public function assignEmployee(Request $request){
        $maintenancereq = Maintenance_Request::find($request->requestid);
        $maintenancereq->employee_id = $request->employee_id;
        if($maintenancereq->save()){
            return response()->json([
                'message'=>'success',
                'maintenance_object'=>$maintenancereq,
                'customer_object'=> User::join('customers','customers.user_id','=','users.id')
                                        ->where('users.id','=',$maintenancereq->customer_id)->get(),
                'reservation_object'=> DB::table('customer_reserves_room')->where('customer_reserves_room.id','=',$maintenancereq->reservation_id)->get(),
                'room_object'=>Room::find($maintenancereq->room_id),
                'employee_object'=>User::join('staff','staff.user_id','=','users.id')
                ->where('users.id','=',$maintenancereq->customer_id)->get()


            ]);
        }
    }

    public function getPendingRequests(){
        $maintenanceRequests = Maintenance_Request::where('status', '=', 'pending')->paginate(10);
        foreach($maintenanceRequests as $mainreq){
            $mainreq['customer_object']=User::join('customers','customers.user_id','=','users.id')
            ->where('users.id','=',$mainreq->customer_id)->get();
            $mainreq['reservation_object'] =DB::table('customer_reserves_room')->where('customer_reserves_room.id','=',$mainreq->reservation_id)->get();
            $mainreq['room_object']=Room::find($mainreq->room_id);
        }
        return $maintenanceRequests;
    }
    public function getCompletedRequest(){
        $maintenanceRequests=Maintenance_Request::where('status','=','completed')->get();
        foreach($maintenanceRequests as $mainreq){
            $mainreq['customer_object']=User::join('customers','customers.user_id','=','users.id')
            ->where('users.id','=',$mainreq->customer_id)->get();
            $mainreq['reservation_object'] =DB::table('customer_reserves_room')->where('customer_reserves_room.id','=',$mainreq->reservation_id)->get();
            $mainreq['room_object']=Room::find($mainreq->room_id);
        }
        return $maintenanceRequests;
    }
}
