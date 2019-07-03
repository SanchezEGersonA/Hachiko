<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Document;
use App\Programming;
use Carbon\Carbon;


class DocumentController extends Controller
{
    public function saveDocument(Request $request){

            $file = $request->file('file');
            $id = $request->id;

            $nombre = $file->getClientOriginalName();
            \Storage::disk('local')->put($nombre,  \File::get($file));

            $document = new Document;
           // $document->created_at = Carbon::now();
           // $document->updated_at = Carbon::now();
            $document->name = $nombre;
            $document->link = url('/').'/api/uploads/'.$nombre;

            $document->save();
            
            $lastdocument =  Document::max('id');

            $programming = Programming::find($id); 
            $programming->documents()->attach($lastdocument,[
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);

            return  'ok';

    }
}
