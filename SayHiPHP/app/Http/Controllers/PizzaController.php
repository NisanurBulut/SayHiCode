<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PizzaController extends Controller
{
    public function index()
    {
        $pizzas =[
            'type'=>'Pizza type 1', 'base'=>'base 1'
        ];
        return view('pizzas',['pizzas'=> $pizzas]);
    }
    public function show($id)
    {
        return view('details',['id'=>$id]);
    }
}
