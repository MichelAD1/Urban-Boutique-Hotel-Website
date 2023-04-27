<?php

namespace App\Http\Controllers;

use App\Models\Currency;
use DateTime;
use Exception;
use Illuminate\Http\Request;

class CurrencyController extends Controller
{
    public function addCurrency(Request $request){
        //admin function
        $currency = new Currency();
        $currency->name = $request->name;
        $currency->code = $request->code;
        $currency->symbol = $request->symbol;
        $currency->isavailable = 1;
        $currency->isdefault = 0;
        $currency->exchange_rate = 0;
        $currency->exchange_rate=$this->getExchangeRate([$currency])[$currency->symbol];
        if($currency->save()){

            return response()->json([
                'message'=>"successful",
                'currency' => $currency
            ],200);
        }

    }
    function getExchangeRate($currencies) {
        $apiKey = "36cad445b8d04af79f3b23769b6a6221";
        $input = "";
        foreach ($currencies as $currency) {
            $input .= $currency->symbol . ",";
        }
        $url = "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=$apiKey&symbols=$input";
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $result = curl_exec($ch);
        curl_close($ch);
        $data = json_decode($result, true);
        return $data['rates'];
    }

    public function getCurrencies(){
        $currencies = Currency::all();
        $last_updated = $currencies[0]->updated_at;
        $formattedDate = $last_updated->format('y-m-d');
        $today = new DateTime();
        $todayFormatted = $today->format('y-m-d');
        if ($formattedDate < $todayFormatted) {
            $new_rates=$this->getExchangeRate($currencies);
            foreach ($currencies as $currency) {
                $currency->exchange_rate = $new_rates[$currency->symbol];
                $currency->save();
            }
        }
        return Currency::all();
    }

}
