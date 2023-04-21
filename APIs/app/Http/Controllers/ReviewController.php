<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReviewController extends Controller
{
    public function addReview(Request $request){
        $user = Auth::user();
        Review::create([
            'customer_id'=>$user->id,
            'rating'=>$request->rating,
            'comment'=>$request->comment
        ]);
        return "success";
    }
    public function editReview(Request $request){
        $review = Review::find($request->review_id);
        if($request->has("rating")){
            $review->rating = $request->rating;
        }
        if($request->has("comment")){
            $review->comment=$request->comment;
        }
        if($review->save()){
            return response()->json([
                'message'=>'review editted succesfully'
            ]);
        }
    }
    public function deleteReview($review_id){
        Review::find($review_id)->delete();
        return "success";
    }
    public function getReviews(){
        return Review::all();
    }
}
