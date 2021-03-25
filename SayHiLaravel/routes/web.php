<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;

Route::get('/register',[RegisterController::class, 'index'])->name('register');

Route::get('/', function () {
    return view('posts.index');
});
