<?php

namespace App\Http\Controllers;

use App\Models\Payment_Option;
use Illuminate\Http\Request;

class PaymentOptionController extends Controller
{
    public function addPaymentOption(Request $request){
        //admin function
        $payment_option = new Payment_Option();
        $payment_option->name = $request->name;
        $payment_option->isavailable = $request->isavailable;
        if($payment_option->save()){
            return response()->json([
                'message'=>"successful"
            ],200);
        }

    }
    public function selectOptions(Request $request){
        $selections = $request->selections;
        foreach ($selections as $key => $value) {
            $payment_option = Payment_Option::find($key);
            $payment_option->isavailable = $value;
            $payment_option->save();
        }
        return "Success";
    }


    public function getPaymentOptions(){
        return Payment_Option::all();
    }
    public function getAvailablePaymentOptions(){
        return Payment_Option::where('isavaliable','=',true);
    }
}
