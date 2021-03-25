<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;

Route::get('/register',[RegisterController::class, 'index']);

Route::get('/', function () {
    return view('posts.index');
});
