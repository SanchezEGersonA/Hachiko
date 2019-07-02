<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Student;
use App\Teacher;

use Illuminate\Support\Str;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Student::class, function (Faker $faker) {
    
    $surname = $faker->name;
    $surname = explode(' ',$surname); 
    $ciclo = random_int(1,10);

    return [
        'name' => $surname[0],
        'surname'=>$surname[1],
        'email' => $faker->unique()->safeEmail,
        'code' =>  random_int(10000000,20000000) ,
        'cycle' => 'Ciclo '.$ciclo ,
        'plan' => 'Plan 2015',
        'balanced' => rand (1, 200) / 10,
        'situation' => 'Regular',
        'password' => 'aulavirtual',//'$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
        'created_at'=>$faker->dateTimeThisDecade,
        'updated_at'=>$faker->dateTimeThisDecade,
        'last_registration' => 'Ciclo '.($ciclo-1)
    ];
});

$factory->define(App\Teacher::class, function(Faker $faker){
    $surname = $faker->name;
    $surname = explode(' ',$surname); 

	return [
        'name' => $surname[0],
        'code' =>  random_int(10000000,20000000) ,
        'email' => $faker->unique()->safeEmail,
        'password' => 'aulavirtual',
        'surname'=>$surname[1],
		'created_at'=>$faker->dateTimeThisDecade,
        'updated_at'=>$faker->dateTimeThisDecade,
	];
});

// $factory->define(App\Response::class, function(Faker $faker){
//     return [
//         'message'=>$faker->words(3,true),
//         'created_at'=>$faker->dateTimeThisYear,
//         'updated_at'=>$faker->dateTimeThisYear,
//     ];