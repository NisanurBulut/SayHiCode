
@extends('layouts.layout')
@section('content')

<div class="flex-center position-ref full-height">
    <div class="content">
        <div class="ui raised link card">
            <div class="content">
              <div class="header">{{ $pizza->name }}</div>
              <div class="meta">
                <span class="category">
                    <div class="ui label">
                        <i class="paperclip icon"></i> {{ $pizza->type }}
                      </div>
                      <div class="ui label">
                        <i class="paperclip icon"></i> {{ $pizza->base }}
                      </div>
                </span>
              </div>
              <div class="description">
                <div class="ui list">
                    @foreach ($pizza->toppings as $topping)
                    <div class="item">
                      <i class="utensils icon"></i>
                      <div class="content">
                          {{ $topping }}
                      </div>
                    </div>
                    @endforeach
                    </div>
              </div>
            </div>
            <div class="extra content">
              <div class="right floated author">
             {{    $pizza->created_at->diffForHumans() }}
              </div>
            </div>
          </div>

    </div>
</div>
@endsection
