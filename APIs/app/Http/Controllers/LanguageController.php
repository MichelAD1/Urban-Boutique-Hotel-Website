<?php

namespace App\Http\Controllers;

use App\Models\Language;
use Illuminate\Http\Request;

class LanguageController extends Controller
{
    public function addLanguage(Request $request){
        //admin function
        $language = new Language();
        $language->name = $request->name;
        $language->isavailable = $request->isavailable;
        $language->isdeafult = $request->isdefault;
        $language->code = $request->code;
        if($language->save()){
            return response()->json([
                'message'=>"successful"
            ],200);
        }

    }
    public function selectLanguages(Request $request){
        $selections = $request->selections;
        foreach ($selections as $key => $value) {
            $language = Language::find($key);
            $language->isavailable = $value;
            $language->save();
        }
        return "Success";
    }


    public function getLanguages(){
        return Language::all();
    }
    public function getAvailableLanguages(){
        return Language::where('isavaliable','=',true);
    }
}
