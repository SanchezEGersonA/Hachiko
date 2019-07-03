<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProgrammingsDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('programmings_documents', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();

            $table->integer('programming_id')->unsigned();
            $table->integer('document_id')->unsigned();

            $table->foreign('document_id')->references('id')->on('documents');
            $table->foreign('programming_id')->references('id')->on('programmings');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('programmings_documents');
    }
}
