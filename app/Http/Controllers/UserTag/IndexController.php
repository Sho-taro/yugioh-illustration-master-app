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

      // フラッシュセッションのメッセージを格納
      $messages = [];
      if ($request->session()->has('storeUTMsg')) {
        $messages['storeUTMsg'] = $request->session()->get('storeUTMsg');
      }
      if ($request->session()->has('deleteUTMsg')) {
        $messages['deleteUTMsg'] = $request->session()->get('deleteUTMsg');
      }
      if ($request->session()->has('updateUTMsg')) {
        $messages['updateUTMsg'] = $request->session()->get('updateUTMsg');
      }

      // dd($messages);

      return inertia('UserTag/Index', ['userTagsNum' => $tags_num, 'userTagsData' => $tags_data, 'messages' => $messages]);
    }
}
