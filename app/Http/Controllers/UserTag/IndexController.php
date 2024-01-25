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
      $tags_data = UserTag::where('user_id', $user_id)->orderBy('updated_at', 'DESC')->paginate(5);

      //
      $message = null;
      if ($request->session()->has('message')) {
        $message = $request->session()->get('message');
      }
        return inertia('UserTag/Index', ['userTagsData' => $tags_data, 'message' => $message]);
    }
}
