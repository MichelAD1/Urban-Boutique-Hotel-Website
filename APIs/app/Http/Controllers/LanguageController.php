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
        $language->isavailable = 1;
        $language->isdefault = $request->isdefault;
        $language->code = $request->code;
        if($language->save()){
            return response()->json([
                'message'=>"successful"
            ],200);
        }

    }
    public function setavailability($languageid){
        $language = Language::find($languageid);
        if($language->isavailable){
            $language->isavailable=0;
        }else{
            $language->isavailable = 1;
        }
        if($language->save()){
            return $language;
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
