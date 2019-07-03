<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    public function programmings()
    {
        return $this->belongsToMany(Programming::class, 'programmings_documents', 'document_id', 'programming_id');
    }

    public function saveDocument($nombre,$file){
        \Storage::disk('local')->put($nombre,  \File::get($file));
    }
}
