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
      $tags_num = UserTag::where('user_id', $user_id)->count();
      $tags_data = UserTag::where('user_id', $user_id)->orderBy('updated_at', 'DESC')->paginate(5)->withQueryString();

      //
      $message = null;
      if ($request->session()->has('message')) {
        $message = $request->session()->get('message');
      }
        return inertia('UserTag/Index', ['userTagsNum' => $tags_num, 'userTagsData' => $tags_data, 'message' => $message]);
    }
}
