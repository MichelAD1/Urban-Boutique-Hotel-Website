<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Customer;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CustomerController extends Controller
{
    public function getInformation(){
        $user = Auth::user();
        $customer = Customer::where("user_id",$user->id)->first();

        if($user && $customer){
            return response()->json([
                'status' => 'success',
                'user' => $user,
                'user_details' => $customer,
            ]);
        }
        return response()->json([
            'status' => 'error',
            'message' => 'No user found',
        ], 404);
    }
    public function editInformation(Request $request){
        //username,email,password for user
        //phone_number for customer
        $user = Auth::user();
        $customer = Customer::where("user_id",$user->id)->first();
        $userinfo = User::find($user->id);
        if($request->has("username")){
            $userinfo->username = $request->username;
        }
        if($request->has("email")){
            $userinfo->email = $request->email;
        }
        if($request->has("password")){
            $userinfo->password = $request->password;
        }
        if($request->has("phone_number")){
            $customer->phone_number = $request->phone_number;
        }
        if($customer->save() && $userinfo->save()){
            return response()->json([
                'message'=>"Editted successfuly"
            ]);
        }


    }
    public function reserveRoom(Request $request){
        $user = Auth::user();
        DB::table("customer_reserves_room")->insert([
            'customer_id' => $user->id,
            'room_id'=>$request->room_id,
            'reservation_date'=> $request->reservation_date,
            'reservation_end'=>$request->reservation_end
        ]);
        return 'success';
    }
    
    public function cancelReservation($reservationid){
        DB::table("customer_reserves_room")->where("id",$reservationid)->delete();
        return "success";
    }
    public function editReservation(Request $request){
        DB::table("customer_reserves_room")->where("id",$request->reservation_id)->update([
            'reservation_date'=> $request->reservation_date,
            'reservation_end'=>$request->reservation_end
        ]);
        return "success";
    }
    public function banCustomer($customerid){
        $user=Auth::user();
        $employee = Admin::where("user_id",$user->id)->first();
        if($employee->position=="admin"){
            $target=User::find($customerid);
            $target->banned=1;
            $target->save();
            return "sucess";
        }
        return "Failed";
    }



}
