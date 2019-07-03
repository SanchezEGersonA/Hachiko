<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Teacher;


class TeacherController extends Controller
{
    public function getTeacher(Request $request){

        $teacher_id = $request->input('id');

        $teacher = Teacher::where([
            ['id', '=', $teacher_id],
        ])->first();
            
        if($teacher !== null)
        {   
            $programmings = $teacher->programmings;
            $programmings->courses;
            $programmings->documents;

            // foreach ($programmings as $value) {
            //     // dd($value);
            //     // $value->courses;
            // }
           return response()->json($teacher)
                            ->setStatusCode(Response::HTTP_OK, Response::$statusTexts[Response::HTTP_OK]);;;
        }
        else{
            // return json_encode(null);
            return response()->json(null)
                            ->setStatusCode(Response::HTTP_OK, Response::$statusTexts[Response::HTTP_OK]);;;
        }
    }
}
