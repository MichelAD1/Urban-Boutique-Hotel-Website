<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    public function addFeedback(Request $request){
        //admin function
        $feedback = new Feedback();
        $feedback->text = $request->text;
        $feedback->customer_id = $request->customer_id;

        if($feedback->save()){
            return response()->json([
                'message'=>"successful"
            ],200);
        }

    }

    public function getFeedbacks(){
        return Feedback::all();
    }
}
