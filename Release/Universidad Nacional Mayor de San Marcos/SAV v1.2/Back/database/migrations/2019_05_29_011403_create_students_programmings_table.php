<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStudentsProgrammingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students_programmings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();

            $table->integer('student_id')->unsigne();
            $table->integer('programming_id')->unsigned();

            $table->foreign('student_id')->references('id')->on('students');
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
        Schema::dropIfExists('students_programmings');
    }
}
