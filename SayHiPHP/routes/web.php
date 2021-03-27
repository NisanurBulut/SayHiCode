<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PizzaController;



Route::get('/', function () {
    return view('welcome');
});
Route::get('/pizzas', [PizzaController::class, 'index'])->name('pizzas');
Route::get('/pizzas/{id}',[PizzaController::class, 'show']);
Route::get('/create', [PizzaController::class, 'create'])->name('create');
Route::post('/pizzas', [PizzaController::class, 'store'])->name('store');
Route::delete('/pizzas/{id}', [PizzaController::class, 'destroy'])->name('destroy');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
