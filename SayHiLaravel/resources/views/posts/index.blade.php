@extends('layouts.app')
@section('content')
    <div class="flex justify-center">
        <div class="w-8/12 bg-white p-6 rounded-lg">
            <form action="{{ route('posts') }}" method="POST">
                @csrf
                <div class="mb-4">
                    <label for="body" class="sr-only">Body</label>
                    <textarea name="body" id="body" cols="30" rows="4" class="bg-gray-100 border-2 w-full -p-4 rounded-lg
                            @error('body')
                                    border-red-500
                            @enderror
                            " placeholder="Say Something!"></textarea>
                    @error('body')
                        <div class="text-red-500 mt-2 text-sm">
                            {{ $message }}
                        </div>
                    @enderror
                </div>
                <div>
                    <button type="submit" class="bg-red-400 text-white px-4 py-3 rounded font-medium w-full">Save</button>
                </div>
            </form>
            @if ($posts->count())
                @foreach ($posts as $post)
                    <div
                        class="card m-2 cursor-pointer border border-red-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                        <div class="m-3">
                            <h2 class="text-lg mb-2">{{ $post->user->username }}
                                <span
                                    class="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">Tag</span>
                            </h2>
                            <p
                                class="font-light font-mono text-sm text-red-700 hover:text-gray-900 transition-all duration-200">
                                {{ $post->body }}</p>
                        </div>
                    </div>
                @endforeach
            @else
                <p>There are nno posts</p>
            @endif
        </div>
    </div>
@endsection
