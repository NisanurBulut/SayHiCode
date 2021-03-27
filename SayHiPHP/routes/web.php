<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PizzaController;



Route::get('/', function () {
    return view('welcome');
});
Route::get('/pizzas', [PizzaController::class, 'index'])->name('pizzas');
Route::get('/pizzas/{id}',[PizzaController::class, 'show']);
Route::get('/create', [PizzaController::class, 'create']);