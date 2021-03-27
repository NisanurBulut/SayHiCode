
@extends('layouts.layout')
@section('content')

<div class="flex-center position-ref full-height">
    @if (Route::has('login'))
        <div class="top-right links">
            @auth
                <a href="{{ url('/pizzas') }}">Home</a>
            @else
                <a href="{{ route('login') }}">Login</a>

                @if (Route::has('register'))
                    <a href="{{ route('register') }}">Register</a>
                @endif
            @endauth
        </div>
    @endif

    <div class="content">
        <img src="/img/pizza-house.png" alt="Pizza House" />
        <div class="title m-b-md">
            The Eskişehir's Best Pizzas
        </div>
        @if (session('message'))
        <div class="ui label">

            <i class="thumbtack icon"></i> {{ session('message') }}
          </div>
        @endif
       <div class="links">
        <a href="{{ route('create') }}">Order a pizza </a>
       </div>
    </div>
</div>
@endsection
