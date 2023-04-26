<?php

namespace App\Http\Controllers;

use App\Models\Staff;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TaskController extends Controller
{
    public function addTask(Request $request){
        //admin function
        $task = new Task();
        $task->text = $request->text;
        $task->start_date = $request->start_date;
        $task->end_date = $request->end_date;
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
        if($request->has("text")){
            $task->text = $request->text;
        }
        if($request->has("start_date")){
            $task->start_date=$request->start_date;
        }
        if($request->has("end_date")){
            $task->start_date=$request->start_date;
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
            DB::table('employee_has_task')->where('taskid','=',$taskid)->delete();
            return response()->json([
                'message'=>"task removed successfuly"
            ],200);
        }
    }
    public function getTasks(){
        $tasks=Task::all();
        foreach($tasks as $task){
            $employees = DB::table('employee_has_task')->join('staff','staff.user_id','=','employee_has_task.employeeid')
                                    ->join('users','users.id','=','staff.user_id')
                                    ->where('employee_has_task.taskid','=',$task->id)->get();
            $task['employees']=$employees;
        }
        return $tasks;
    }
    public function getEmployeeTasks(){
        $employee = Auth::user();
        $tasks = DB::table('employee_has_task')->where('employee_has_task.taskid','=','staff.user_id')->get();
        return $tasks;
    }
    public function addEmployeeToTask(Request $request){
        DB::table('employee_has_task')->insert([
            'employeeid'=>$request->employeeid,
            'taskid'=>$request->taskid
        ]);
        return response()->json([
            'message'=>"added succesfully",
            'task_object'=> Task::find($request->taskid),
            'employee_object' => Staff::join('users','users.id','=','staff.user_id')->where('users.id','=',$request->employeeid)->first()
        ]);
    }
    public function RemoveEmployeeFromTask(Request $request){
        DB::table('employee_has_task')->where('employeeid','=',$request->employeeid)->where('taskid','=',$request->taskid)->delete();


        return response()->json([
            'message'=>"deleted succesfully",

        ]);
    }
}
