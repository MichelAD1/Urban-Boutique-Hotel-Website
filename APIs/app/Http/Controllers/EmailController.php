<?php

namespace App\Http\Controllers;

use App\Models\ContactFormSender;
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
            Mail::to($user->email)->send(new EmailSender($user,$request->subject,$request->body));
        }

        return response()->json(['message' => 'Emails sent successfully']);
    }
    public function sendEmailContactForm(Request $request)
    {
        $employee = Staff::join('users','users.id','=','staff.user_id')->where('staff.position','=',1)->first();

        Mail::to($employee->email)->send(new ContactFormSender($request->name,$request->email,$request->subject,$request->body));


        return response()->json(['message' => 'Emails sent successfully']);
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
