
@extends('layouts.layout')
@section('content')

<div class="flex-center position-ref full-height">
    <div class="content">
        <div class="title m-b-md">
            The Eskişehir's Best Pizzas
        </div>
        @foreach ($pizzas as $pizza)
            {{ $pizza->type }} - {{ $pizza->name }}- {{ $pizza->base }}
        @endforeach
    </div>
</div>
@endsection
