<?php

namespace App\Http\Controllers\UserTag;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\UserTag;
use App\Models\ReleasedCardUserTag;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // dd($request->route('userId'));
        $user_id = $request->user()->id;   // ユーザのidを取得
        $tags = UserTag::where('user_id', $user_id)->get();
        return inertia('UserTag/Index', ['userTags' => $tags]);
    }
}
