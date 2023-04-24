<?php

namespace App\Models;

use Illuminate\Bus\Queueable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactFormSender extends Mailable
{
    use Queueable, SerializesModels;
    protected $name,$email,$subject,$body;
    public function __construct($name,$email,$subject,$body)
    {
        $this->name = $name;
        $this->name = $email;
        $this->subject = $subject;
        $this->body = $body;
    }
    public function build()
    {
        return $this->view('contactform', [
            'name' => $this->name,
            'email'=>$this->email,
            'subject'=>$this->subject,
            'body'=>$this->body
        ]);
    }
}
