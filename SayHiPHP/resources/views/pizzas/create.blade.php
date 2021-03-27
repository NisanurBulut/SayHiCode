@extends('layouts.app')
@section('content')
<div class="wrapper create-pizza">
    <h1 class="ui dividing header">Ordering Pizza</h1>
    <div class="flex-center position-ref full-height ">
        <div class="content">
            <form class="ui form large" action="/pizzas" method="POST">
                @csrf

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
                <div class="field">
                    <label>Extra toppings:</label>
                    <div class="field">
                        <div class="ui toggle checkbox">
                            <input type="checkbox" name="toppings[]" tabindex="0" class="hidden" value="mushrooms" id="mushrooms">
                            <label for="mushrooms">Mushrooms</label>
                        </div>
                        <div class="ui toggle checkbox">
                            <input type="checkbox" name="toppings[]" tabindex="1" class="hidden" value="peppers" id="peppers">
                            <label for="peppers">Peppers</label>
                        </div>
                        <div class="ui toggle checkbox">
                            <input type="checkbox" name="toppings[]" tabindex="2" class="hidden" value="garlic" id="garlic">
                            <label for="garlic">garlic</label>
                        </div>
                        <div class="ui toggle checkbox">
                            <input type="checkbox" name="toppings[]" tabindex="3" class="hidden" value="olives" id="olives">
                            <label for="olives">Olives</label>
                        </div>
                    </div>
                </div>
                <button class="ui primary button">
                    Order Pizza
                </button>

            </form>
        </div>
    </div>
</div>
@endsection
