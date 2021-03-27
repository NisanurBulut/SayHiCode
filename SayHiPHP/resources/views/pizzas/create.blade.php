
@extends('layouts.layout')
@section('content')

<div class="flex-center position-ref full-height">
    <div class="content">
        <form class="ui form large" action="/pizzas" method="POST">
            @csrf
            <h4 class="ui dividing header">Ordering Pizza</h4>
            <div class="field">
                <label for="name">Your name:</label>
                  <input type="text" name="name" id="name" required>
            </div>
            <div class="field">
                <label for="type">Choose type of pizza:</label>
                <select name="type" id="type">
                  <option value="margarita">Margarita</option>
                  <option value="hawaiian">Hawaiian</option>
                  <option value="veg supreme">Veg Supreme</option>
                  <option value="volcano">Volcano</option>
                </select>
            </div>
            <div class="field">
                <label for="base">Choose crust:</label>
                <select name="base" id="base">
                  <option value="thick">Thick</option>
                  <option value="thin & crispy">Thin & Crispy</option>
                  <option value="cheese crust">Cheese Crust</option>
                  <option value="garlic crust">Garlic Crust</option>
                </select>
            </div>
            <button class="ui primary button">
                Order Pizza
              </button>
          </form>
    </div>
</div>
@endsection
