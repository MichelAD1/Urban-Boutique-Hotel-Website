<?php

namespace App\Http\Controllers;

use App\Models\Disaster_Response;
use Illuminate\Http\Request;

class DisasterResponseController extends Controller
{
    public function addDisasterResponse(Request $request){
        //admin function
        $disasterresponse = new Disaster_Response();
        $disasterresponse->text = $request->text;
        if($disasterresponse->save()){
            return response()->json([
                'message'=>"successful"
            ],200);
        }

    }
    public function editDisasterResponse(Request $request){
        //admin function
        $disasterresponse = Disaster_Response::find($request->responseid);
        $disasterresponse->text = $request->text;
        if($disasterresponse->save()){
            return response()->json([
                'message'=>"disaster response editted successfuly"
            ],200);
        }
    }
    public function removeDisasterResponse($responseid){
        //admin function
        if(Disaster_Response::find($responseid)->delete()){
            return response()->json([
                'message'=>"disaster response removed successfuly"
            ],200);
        }
    }
    public function getDisasterResponses(){
        return Disaster_Response::all();
    }
}
