<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\Customer;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }

    public function login(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',

        ]);

        if ($validation->fails()) {
            return response()->json([
                "status"=> "error",
                "message"=>$validation->errors(),
            ]);
        }
        $credentials = $request->only('email', 'password');

        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::user();
        if($user->type==0){
            $customer = Customer::where('user_id',$user->id)->first();
            return response()->json([
                'status' => 'success',
                'user' => $user,
                'customer'=>$customer,
                'authorisation' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ]);
        }else if($user->type==1){
            $admin = Admin::where('user_id',$user->id)->first();
            return response()->json([
                'status' => 'success',
                'user' => $user,
                'customer'=>$admin,
                'authorisation' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ]);
        }


    }

    public function register(Request $request){
        $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'type'=>$request->type,
            'dob'=>$request->dob,
            'gender'=>$request->gender
        ]);
        if($request->type==0){ //user a customer
            $customer = Customer::create([
                'user_id'=>$user->id,
                'phone_number'=>$request->phone_number

            ]);
            $token = Auth::login($user);
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user,
            'customer'=>$customer,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
        }else if($request->type==1){ //user an admin
            $admin = Admin::create([
                'user_id'=>$user->id,
                'position'=>$request->position
            ]);
            $token = Auth::login($user);
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
        }

    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'status' => 'success',
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }

}