@extends('layouts.app')
@section('content')
    <div class="flex justify-center">
        <div class="w-8/12">
            <div class="bg-purple-200 p-6 mb-6 rounded-lg">
                <div class="card m-2 cursor-pointer border-8 border border-purple-800
                rounded-lg hover:shadow-md hover:border-opacity-0 hover:bg-purple-100
                transform hover:-translate-y-1 transition-all duration-200">
                    <div class="m-3 flex">
                        <h1 class="mr-10 text-sm font-bold">
                            <svg class="inline-block h-7 w-7 text-yellow-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                              </svg>{{ $user->name }}</h1>
                              <h1 class="mr-10 text-sm font-bold">
                                <svg class="inline-block h-7 w-7 text-pink-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clip-rule="evenodd" />
                                  </svg>
                                {{ $user->username }}</h1>
                        <h1 class="mr-10 text-sm">
                            <svg class="inline-block h-7 w-7 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                                <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                              </svg>
                            {{ $user->email }}</h1>
                        <p class="mr-10">
                            <svg class="inline-block h-7 w-7 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                              </svg>
                            {{ $posts->count() }} {{ Str::plural('post',$posts->count()) }}</p>
                        <p class="mr-10">
                            <svg class="fill-heart text-red-700 inline-block h-7 w-7 heart"
                            xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                            {{ $user->receivedLikes->count() }} {{ Str::plural('like',$user->receivedLikes->count()) }}</p>
                    </div>
                </div>
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
