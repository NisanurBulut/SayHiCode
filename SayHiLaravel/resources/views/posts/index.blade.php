@extends('layouts.app')
@section('content')
    <div class="flex justify-center">
        <div class="w-8/12 bg-white p-6 rounded-lg">
            <form action="{{ route('posts') }}" method="POST">
                @csrf
                <div class="mb-4">
                    <label for="body" class="sr-only">Body</label>
                    <textarea name="body" id="body" cols="30" rows="4"
                        class="bg-gray-100 border-2 w-full -p-4 rounded-lg
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

                </div>
            </form>
        </div>
    </div>
@endsection
