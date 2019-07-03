<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/login/', 'LoginController@login');
Route::get('/course/', 'CourseController@getCourse');
Route::get('/student/', 'StudentController@getStudent');
Route::post('/studentupdate/', 'StudentController@updateData');
Route::get('/teacher/', 'TeacherController@getTeacher');
Route::post('/document/', 'DocumentController@saveDocument');
Route::get('/uploads/{file}', function ($file) {
    return Storage::response($file);

});




