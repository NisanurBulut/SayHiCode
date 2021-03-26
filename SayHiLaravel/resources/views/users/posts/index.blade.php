@extends('layouts.app')
@section('content')
    <div class="flex justify-center">
        <div class="w-8/12">
            <div class="bg-purple-200 p-6 mb-6 rounded-lg">
                <x-user-card :user="$user" :postCount="$posts->count()"
                    :receivedLikesCount="$user->receivedLikes->count()" />
            </div>
            <div class="bg-purple-50 p-6 rounded-lg">
                @if ($posts->count())
                    @foreach ($posts as $post)
                        <x-post :post="$post" />
                    @endforeach
                    {{ $posts->links() }}
                @else
                    <p>{{ $user->name }} does not have any posts </p>
                @endif
            </div>
        </div>
    </div>
@endsection
