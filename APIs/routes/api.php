<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DiscountController;
use App\Http\Controllers\FAQController;
use App\Http\Controllers\PolicyController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\SupplyController;
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
    Route::middleware(['auth', 'check.banned'])->group(function(){
        Route::group(['prefix'=>'room'],function(){
            Route::middleware(['auth', 'check.employee'])->group(function(){
                Route::post('add',[RoomController::class,'addRoom']);
                Route::post('edit',[RoomController::class,'editRoom']);
                Route::get('remove/{roomid}',[RoomController::class,'removeRoom']);
                Route::group(['prefix'=>'images'],function(){
                    Route::post('add',[ImageController::class,'uploadRoomImages']);
                    Route::post('edit',[ImageController::class,'addAndRemoveImages']);
                });

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
                Route::get('ban/{customerid}',[CustomerController::class,'banCustomer']);
            });
            Route::middleware(['auth', 'check.customer'])->group(function(){
                Route::post('editinfo',[CustomerController::class,'editInformation']);
                Route::get('getinfo',[CustomerController::class,'getInformation']);
                Route::get('remove',[CustomerController::class,'removeAccount']);


            });

        });
        Route::group(['prefix'=>'employee'],function(){
            Route::middleware(['auth', 'check.employee'])->group(function(){

                Route::post('editinfo',[CustomerController::class,'editInformation']);
            });
            Route::middleware(['auth', 'check.admin'])->group(function(){
                Route::get('ban/{customerid}',[CustomerController::class,'banCustomer']);
            });

        });
        Route::group(['prefix'=>'discount'],function(){
            Route::middleware(['auth', 'check.employee'])->group(function(){
                Route::post("addwhole",[DiscountController::class,'addWholeDiscount']);
                Route::post("add",[DiscountController::class,'addRoomDiscount']);
                Route::post("removewhole",[DiscountController::class,'removeWholeDiscount']);
                Route::post("remove",[DiscountController::class,'removeRoomDiscount']);



            });
            Route::middleware(['auth', 'check.customer'])->group(function(){



            });
            Route::get("get",[DiscountController::class,'getDiscountedRooms']);

        });
        Route::group(['prefix'=>'faq'],function(){
            Route::middleware(['auth', 'check.employee'])->group(function(){
                Route::post('add',[FAQController::class,'addFAQ']);
                Route::post('edit',[FAQController::class,'editFAQ']);
                Route::get('remove',[FAQController::class,'removeFAQ']);

            });
            Route::middleware(['auth', 'check.customer'])->group(function(){



            });
            Route::get('get',[FAQController::class,'getFAQs']);

        });
        Route::group(['prefix'=>'policy'],function(){
            Route::middleware(['auth', 'check.employee'])->group(function(){
                Route::post('add',[PolicyController::class,'addPolicy']);
                Route::post('edit',[PolicyController::class,'editPolicy']);
                Route::get('remove',[PolicyController::class,'removePolicy']);

            });
            Route::middleware(['auth', 'check.customer'])->group(function(){



            });
            Route::get('get',[PolicyController::class,'getPolicies']);

        });
        Route::group(['prefix'=>'supply'],function(){
            Route::middleware(['auth', 'check.employee'])->group(function(){
                Route::post('add',[SupplyController::class,'addNewSupplyItem']);
                Route::post('increment',[SupplyController::class,'IncreaseAmount']);
                Route::post('edit',[SupplyController::class,'edit']);
                Route::get('remove',[SupplyController::class,'deleteItem']);

            });
            Route::middleware(['auth', 'check.customer'])->group(function(){



            });
            Route::get('get',[SupplyController::class,'getSupplies']);

        });
        Route::group(['prefix'=>'supply'],function(){
            Route::middleware(['auth', 'check.employee'])->group(function(){


            });
            Route::middleware(['auth', 'check.customer'])->group(function(){
                Route::post('add',[ReviewController::class,'addReview']);
                Route::post('edit',[ReviewController::class,'editReview']);
                Route::get('remove',[ReviewController::class,'deleteReview']);


            });
            Route::get('get',[ReviewController::class,'getReviews']);

        });


    });
});
