@extends('layouts.app')
@section('content')

    <div class="focus:outline-none flex justify-center">
        <div class="focus:outline-none w-8/12 bg-white p-6 rounded-lg">
            <form action="{{ route('posts') }}" method="POST">
                @csrf
                <div class="mb-4">
                    <label for="body" class="sr-only">Body</label>
                    <textarea name="body" id="body" cols="30" rows="4"
                    class="focus:outline-none bg-gray-100 border-2 w-full -p-4 rounded-lg
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
                    <button type="submit"
                    class="focus:outline-none bg-green-600 mb-4 px-4 py-3 text-white rounded font-medium w-full">Save</button>
                </div>
            </form>
            @if ($posts->count())
                @foreach ($posts as $post)
                   <x-post  :post="$post" />
                @endforeach
                {{ $posts->links() }}
            @else
                <p>There are no posts</p>
            @endif
        </div>
    </div>
@endsection
