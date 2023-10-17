<!DOCTYPE html>
<!-- <html lang="{{ str_replace('_', '-', app()->getLocale()) }}"> -->
<html lang="ja">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- <title inertia>{{ config('app.name', 'Laravel') }}</title> -->

        <link rel="icon" type="images/png" href="/images/app-icon3.png">

        <!-- ↓ リセットcss -->
        <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css">
        <!-- ↓ anime.js -->
        <script src="/js/anime.min.js" defer></script>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
