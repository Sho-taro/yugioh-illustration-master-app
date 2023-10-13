<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Auth\Access\AuthorizationException;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        // ココに処理を書いていく！!
        $user = $request->user();  // Requestクラスのuser関数で、アクセスしてきたuserを取得
        if ($user === null || $user->id !== 1 || $user->name !== 'skkch') {
            throw new AuthorizationException('アクセス権限がありません');
        }
        // echo 'authミドルウェア';

        return $next($request);
    }
}
