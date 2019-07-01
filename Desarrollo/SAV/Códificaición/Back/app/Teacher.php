<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    public function programmings()
    {
        return $this->belongsTo(Programming::class,'id','teacher_id');
    }
}
