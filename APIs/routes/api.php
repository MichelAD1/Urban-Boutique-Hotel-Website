<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CustomerController;
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
            Route::post('add',[RoomController::class,'addRoom']);
            Route::post('edit',[RoomController::class,'editRoom']);
            Route::get('remove/{roomid}',[RoomController::class,'removeRoom']);

        });
        Route::middleware(['auth', 'check.customer'])->group(function(){
            Route::post('reserve',[CustomerController::class,'reserveRoom']);
            Route::post('editreservation',[CustomerController::class,'editReservation']);
            Route::get('cancelreservation/{reservationid}',[CustomerController::class,'cancelReservation']);
        });
        Route::get('getrooms',[RoomController::class,'getRooms']);
    });
    Route::group(['prefix'=>'customer'],function(){
        Route::middleware(['auth', 'check.admin'])->group(function(){

        });
        Route::middleware(['auth', 'check.customer'])->group(function(){
            Route::post('editinfo',[CustomerController::class,'editInformation']);


        });

    });


});
