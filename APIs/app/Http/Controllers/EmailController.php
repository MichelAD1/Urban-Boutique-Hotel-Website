<?php

namespace App\Http\Controllers;

use App\Mail\ContactFormEmailSender;
use App\Mail\EmailMarketingSender;
use App\Models\EmailSender;
use App\Models\ForgottenPasswordSender;
use App\Models\Staff;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function sendEmailToUsers(Request $request)
    {
        $users = User::where('type','=',0);

        foreach ($users as $user) {
            $user->subject = $request->subject;
            $user->body = $request->body;
            $response= Mail::to($user->email)->send(new EmailMarketingSender($user));
        }

        return response()->json(['message' => 'Emails sent successfully']);
    }
    public function sendEmailContactForm(Request $request)
    {
        $employee = Staff::join('users','users.id','=','staff.user_id')->where('staff.position','=',1)->where('users.id','=','11')->first();
        $data = [
            'name'=>$request->name,
            'email'=>$request->email,
            'subject'=>$request->subject,
            'message'=>$request->message
        ];
        $response=Mail::to($employee->email)->send(new ContactFormEmailSender($data));
        return $response;


        // return response()->json(['message' => 'Email sent successfully']);
    }

    public function sendForgottenPassword(Request $request)
    {
        $email = $request->email;
        $user = User::where('email', $email)->first();
        if ($user) {
            Mail::to($email)->send(new ForgottenPasswordSender($request->name,$request->email,$request->subject,$request->body));
        } else {
            // The email address is not in use by any user in the database
        }




        return response()->json(['message' => 'Emails sent successfully']);
    }

}
