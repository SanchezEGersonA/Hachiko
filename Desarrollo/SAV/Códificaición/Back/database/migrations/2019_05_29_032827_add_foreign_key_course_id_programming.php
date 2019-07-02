<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForeignKeyCourseIdProgramming extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('programmings', function (Blueprint $table) {
            //
              $table->integer('course_id')->unsigned();

              $table->foreign('course_id')->references('id')->on('courses');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('programmings', function (Blueprint $table) {
            //

            $table->dropForeign('programmings_course_id_foreign');
            $table->dropColumn('course_id');
        });
    }
}
