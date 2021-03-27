<?php

namespace App\Http\Controllers;

use App\Models\Pizza;
use Illuminate\Http\Request;

class PizzaController extends Controller
{
    public function index()
    {
        $pizzas = Pizza::all();
        return view('pizzas.index',['pizzas'=> $pizzas]);
    }
    public function show($id)
    {
        $pizza = Pizza::findOrFail($id);
        return view('pizzas.show',['pizza'=>$pizza]);
    }
    public function create()
    {
        return view('pizzas.create');
    }
    public function store(Request $request)
    {
        error_log($request->name);
        dd($request);
        return redirect('/');
    }
}
