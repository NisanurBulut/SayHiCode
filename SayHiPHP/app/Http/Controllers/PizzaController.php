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

        $this->validate($request,[
            'name'=>'required',
            'base'=>'required',
            'type'=>'required'
        ]);

       $pizzaEntity = new Pizza();
       $pizzaEntity -> name = $request->name;
       $pizzaEntity -> type = $request->type;
       $pizzaEntity -> base = $request->base;
       $pizzaEntity -> toppings = $request->toppings;
       $pizzaEntity->save();
       return redirect('/')->with('message','Thanks for order');
    }
    public function destroy($id)
    {
        $pizza=Pizza::findOrFail($id);
        $pizza->delete();
        return redirect('/')->with('message','deleted order');
    }
}
