<?php

use Illuminate\Support\Facades\Route;



Route::get('/', function () {
    return view('welcome');
});

Route::get('/pizzas','PizzaController@index');
Route::get('/pizzas/{$id}','PizzaController@show');