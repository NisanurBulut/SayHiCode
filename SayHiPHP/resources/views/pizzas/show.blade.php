@extends('layouts.layout')
@section('content')

    <div class="flex-center position-ref full-height">
        <div class="content">
            <div class="ui card">
                <div class="content">
                 <form action="{{ route('destroy', $pizza->id) }}" method="POST">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="right floated">
                        <i class="red trash alternate icon large"></i>
                      </button>
                 </form>

                  {{ $pizza->name }}
                </div>
                <div class="extra content">
                    <span class="category">
                        <div class="ui label">
                            <i class="paperclip icon"></i> {{ $pizza->type }}
                        </div>
                        <div class="ui label">
                            <i class="paperclip icon"></i> {{ $pizza->base }}
                        </div>
                    </span>
                </div>
                <div class="content">
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
                <div class="extra content">
                    <div class="extra content large">
                        <div class="right floated author">
                            {{ $pizza->created_at->diffForHumans() }}
                        </div>
                    </div>
                </div>
              </div>
        </div>

    </div>
    </div>
@endsection
