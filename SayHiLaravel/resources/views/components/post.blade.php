@props(['post' => $post])

<div class="card m-2 cursor-pointer border-8 border border-purple-300
rounded-lg hover:shadow-md hover:border-opacity-0
transform hover:-translate-y-1 transition-all duration-200">
    <div class="m-3">
        <a href="{{ route('users.posts', $post->user) }}" class="text-lg mb-2">
            <h2>{{ $post->user->username }}</h2>
            <span class="text-sm text-teal-800 font-mono bg-teal-100
                            inline rounded-full px-2 align-top float-right animate-pulse">
                {{ $post->created_at->diffForHumans() }}</span>
        </a>

        <p class="font-light font-mono text-sm text-purple-800
        hover:text-gray-900 transition-all duration-200">
            {{ $post->body }}</p>
    </div>

    <div class="bottom-0 left-0 right-0 pl-4">
        <div class="pt-4">
            <div class="mb- 2 flex items-center justify-between">
                @auth
                    @if (!$post->likedBy(auth()->user()))
                        <form action={{ route('posts.likes', $post) }} method="POST" class="mr-1">
                            @csrf
                            <button id="likeBtn" type="submit"
                                class="focus:outline-none mr-3 inline-flex items-center cursor-pointer">
                                <svg class="fill-heart text-red-700 inline-block h-7 w-7 heart"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <span class="focus:outline-none text-gray-600 text-sm font-bold">
                                    {{ $post->likes->count() }}
                                    {{ Str::plural('Like', $post->likes->count()) }}</span>
                            </button>
                        </form>
                    @else
                        <form action={{ route('posts.likes', $post) }} method="post">
                            @csrf
                            @method('DELETE')
                            <button id="unlikeBtn" class="mr-3 inline-flex items-center cursor-pointer">
                                <svg class="fill-heart text-red-700 inline-block h-7 w-7 heart"
                                    xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <span class="text-gray-600 text-sm font-bold">
                                    {{ $post->likes->count() }}
                                    {{ Str::plural('Like', $post->likes->count()) }}</span>
                            </button>
                        </form>

                    @endif
                @endauth
                @can('delete', $post)
                    <form action={{ route('posts.destroy', $post) }} method="post">
                        @csrf
                        @method('DELETE')
                        <button id="deleteBtn" class="focus:outline-none mr-3 inline-flex items-center cursor-pointer">
                            <svg class="fill-trash text-red-700 inline-block h-7 w-7 trash"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </form>
                @endcan
            </div>

        </div>
    </div>

</div>
