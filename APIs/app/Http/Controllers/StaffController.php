<?php

namespace App\Http\Controllers;

use App\Models\Staff;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class StaffController extends Controller
{
    public function editInformation(Request $request){
        $userinfo = User::find($request->employeeid);
        $employee = Staff::where("user_id",$userinfo->id)->first();
        if($request->has("username")){
            $userinfo->username=$request->username;
        }
        if($request->has("password")){
            $userinfo->password=$request->password;
        }
        if($request->has("email")){
            $userinfo->email=$request->email;
        }
        if($request->has("position")){
            $employee->position = $request->position;
        }
        if($userinfo->save() && $employee->save()){
            return response()->json([
                'message'=>"eddited succesfully"
            ]);
        }
    }
    public function banEmployee($employeeid){
        $user=Auth::user();
        $employee = Staff::where("user_id",$user->id)->first();
        if($employee->position=="admin"){
            $target=User::where('id',$employeeid)->first();
            Staff::where('user_id',$target->id)->delete();
            if($target->banned=1){
                $target->banned=0;
            }else{
                $target->banned=1;
            }

            $target->save();
            return "sucess";
        }
        return "Failed";
    }
    public function getRevenue(){
        $revenue = DB::table('customer_reserves_room')->join("rooms",'rooms.id','=','customer_reserves_room.room_id')
                    ->sum("rooms.rent");
        return $revenue;
    }
    public function searchEmployee($employeeid){
        $employee = Staff::join('users','staff.user_id','=','users.id')->where('users.id','=',$employeeid)->first();
        return $employee;
    }
    public function getEmployees(){
        return Staff::join('users','staff.user_id','=','users.id')->get();
    }


}
