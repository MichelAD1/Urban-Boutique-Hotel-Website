<?php

namespace App\Http\Controllers;

use App\Models\Currency;
use Illuminate\Http\Request;

class CurrencyController extends Controller
{
    public function addCurrency(Request $request){
        //admin function
        $currency = new Currency();
        $currency->name = $request->name;
        $currency->exchange_rate = $request->exchange_rate;
        if($currency->save()){
            return response()->json([
                'message'=>"successful"
            ],200);
        }

    }
    function getExchangeRate($fromCurrency, $toCurrency) {
        $url = 'https://www.google.com/finance/converter?a=1&from=' . $fromCurrency . '&to=' . $toCurrency;
        $ch = curl_init();
        $timeout = 0;
        curl_setopt ($ch, CURLOPT_URL, $url);
        curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
        $data = curl_exec($ch);
        curl_close($ch);
        $data = explode('bld>', $data);
        $data = explode($toCurrency, $data[1]);
        return floatval($data[0]);
    }

    public function getCurrencies(){
        $currencies = Currency::all();
        foreach ($currencies as $currency) {
            $new_rate = $this->getExchangeRate('usd',$currency->name);
            $currency->exchange_rate = $new_rate;
            $currency->save();
        }
        return Currency::all();
    }

}
