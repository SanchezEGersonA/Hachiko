<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $guarded = [];
    
    public function programmings()
    {
        return $this->belongsToMany(Programming::class, 'students_programmings', 'student_id', 'programming_id');
    }

}
