<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{   
    protected $guarded = [];

    public function programming()
    {
        return $this->belongsTo(Programming::class,'id','course_id');
    }
}
