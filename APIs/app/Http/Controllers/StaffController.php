<?php

namespace App\Http\Controllers;

use App\Models\Staff;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StaffController extends Controller
{
    public function editInformation(Request $request){
        $user = Auth::user();
        $userinfo = User::find($user->id);
        $employee = Staff::where("user_id",$user->id)->first();
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
            $target->banned=1;
            $target->save();
            return "sucess";
        }
        return "Failed";
    }
}
