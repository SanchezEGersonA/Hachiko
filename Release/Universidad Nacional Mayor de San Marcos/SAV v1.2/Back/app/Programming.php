<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Programming extends Model
{   

    protected $guarded = [];

    public function courses()
    {
        return $this->hasMany(Course::class,'id','course_id');
        // return $this->belongsToMany(Course::class, 'programmings', 'id', 'course_id');

    }

    public function teachers()
    {
        return $this->hasMany(Teacher::class,'id','teacher_id');
    }

    public function students()
    {
        return $this->belongsToMany(Student::class, 'students_programmings', 'programming_id', 'student_id');
    }

    public function documents()
    {
        return $this->belongsToMany(Document::class, 'programmings_documents', 'programming_id', 'document_id');
    }


}
