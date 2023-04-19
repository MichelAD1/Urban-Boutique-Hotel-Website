<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\RoomController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(["prefix"=>"v0.1"], function(){
    Route::group(['prefix'=>'auth'],function(){
        Route::post('login',[AuthController::class, 'login']);
        Route::post('register',[AuthController::class, 'register']);
        Route::get('logout',[AuthController::class, 'logout']);
        Route::post('refresh',[AuthController::class, 'refresh']);
    });

    Route::group(['prefix'=>'room'],function(){
        Route::middleware(['auth', 'check.admin'])->group(function(){
            Route::post('addroom',[RoomController::class,'addRoom']);
        });
        Route::middleware(['auth', 'check.customer'])->group(function(){

        });
        Route::get('getrooms',[RoomController::class,'getRooms']);
    });


});
