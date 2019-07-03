<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $student = factory(App\Student::class,50)->create();
        $teacher = factory(App\Teacher::class,50)->create();
        // $student->each(function(App\User $student) use ($students)
        // {
        //         $messages = factory(App\Message::class)->times(20)->create([
        //             'user_id' => $user->id
        //         ]);

        //         $messages->each(function(App\Message $message) use ($users){
        //             factory(App\Response::class,random_int(1,10))->create([
        //                 'message_id'=>$message->id,
        //                 'user_id'=> $users->random(1)->first()->id,
        //             ]);
        //         });

        //         $user->follows()->sync(
        //         $users->random(10)
        //         );
        //     }
        // ); // pp\Message::class == 'App\Message'
    }
}
