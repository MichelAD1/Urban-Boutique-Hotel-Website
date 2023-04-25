<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    public function addTask(Request $request){
        //admin function
        $task = new Task();
        $task->text = $request->text;
        $task->employeeid = $request->employeeid;
        $task->due_date = $request->due_date;
        if($task->save()){
            return response()->json([
                'message'=>"successful",
                'task'=>$task
            ],200);
        }

    }
    public function editTask(Request $request){
        //admin function
        $task = Task::find($request->taskid);
        if($request->has("employeeid")){
            $task->employeeid = $request->employeeid;
        }
        if($request->has("due_date")){
            $task->due_date=$request->due_date;
        }
        if($request->has("text")){
            $task->text=$request->text;
        }
        if($task->save()){
            return response()->json([
                'message'=>"task editted successfuly",
                'task'=>$task
            ],200);
        }
    }
    public function removeTask($taskid){
        //admin function
        if(Task::find($taskid)->delete()){
            return response()->json([
                'message'=>"task removed successfuly"
            ],200);
        }
    }
    public function getTasks(){
        return Task::all();
    }
    public function getEmployeeTasks(){
        $employee = Auth::user();
        $tasks = Task::where('employeeid',$employee->id)->get();
        return $tasks;
    }
}
