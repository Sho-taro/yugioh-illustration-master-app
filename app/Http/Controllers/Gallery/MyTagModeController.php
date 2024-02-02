<?php

namespace App\Http\Controllers\Gallery;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\UserTag;
use Inertia\Inertia;

class MyTagModeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
      // ユーザーがログインしていたら、user_tagsを取得
      $user_tags = null;
      if (!is_null($request->user())) {
        // $user_tags = $request->user()->userTags;
        // updated_atの降順で$user_tagsを取得
        $user_tags = UserTag::where('user_id', $request->user()->id)->orderBy('updated_at', 'DESC')->get();
      }

      return inertia('Gallery/MyTagMode', ['userTags' => $user_tags]);
    }
}
