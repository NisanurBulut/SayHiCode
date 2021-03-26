<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Say Hi Laravel</title>
    <meta charset="UTF-8" />
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body class="bg-gray-100">
    <nav class="p-6 text-white flex items-center justify-between flex-wrap bg-purple-900 p-6 mb-6">
        <div class="flex items-center flex-no-shrink mr-4">
            <svg class="fill-current text-white h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span class="font-semibold text-xl tracking-tight">Say Hi Laravel !!</span>
            <ul class="flex items-center">
                <li>
                    <a class="p-6" href="{{ route('posts') }}">Posts</a>
                </li>
            </ul>
        </div>

        <ul class="flex items-center">
            @auth
            <li>
                <a class="p-6" href="">{{ auth()->user()->name }}</a>
            </li>
            <li>
               <form action="{{route('logout')}}" method="post" class="p-3 inline">
               @csrf
               <button type="submit">Logout</button></form>
            </li>
            @endauth
            @guest
            <li>
                <a class="p-6" href="{{route('login')}}">login</a>
            </li>
            <li>
                <a class="p-6" href="{{route('register')}}">Register</a>
            </li>
            @endguest
        </ul>
    </nav>
    </div>
    @yield('content')
</body>

</html>