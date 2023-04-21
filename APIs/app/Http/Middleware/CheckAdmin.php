<?php

namespace App\Http\Middleware;

use App\Models\Admin;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user=Auth::user();

        if($user->type == 1){
            $employee = Admin::where('user_id',$user->id)->first();
            if($employee->position=="admin"){
                return $next($request);
            }else{
                return response()->json([
                    'status' => 'error',
                    'message' => 'Not an Admin',
                ], 401);
            }

        }else{
            return response()->json([
                'status' => 'error',
                'message' => 'Not an Employee',
            ], 401);
        }

    }
}