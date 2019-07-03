<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Student;

class StudentController extends Controller
{
    public function getStudent(Request $request){

        $student_id = $request->input('id');

        $student = Student::where([
            ['id', '=', $student_id],
        ])->first();
            
        if($student !== null)
        {   
            $programmings = $student->programmings;
       
                foreach ($programmings as $key => $value) {
                    $value->courses;
                    $value->teachers;
                    $value->documents;
                }
            return response()->json($student)
                             ->setStatusCode(Response::HTTP_OK, Response::$statusTexts[Response::HTTP_OK]);;;
        }
        else{
            // return json_encode(null);
            return response()->json(null)
                             ->setStatusCode(Response::HTTP_OK, Response::$statusTexts[Response::HTTP_OK]);;;
        }
    }
}

