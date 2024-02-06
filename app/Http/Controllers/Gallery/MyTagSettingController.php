<?php

namespace App\Http\Controllers\Gallery;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\UserTag;
use Inertia\Inertia;

class MyTagSettingController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
      if (is_null($request->user())) {
        // throw new Exception('未ログインです。ログインして下さい。');  // Exceptionクラスをimportしないと使えない
        return redirect(route('login'));  // ログイン画面にリダイレクト
      }

      // $user_tags = $request->user()->userTags;
      // updated_atの降順で$user_tagsを取得
      $user_tags = UserTag::where('user_id', $request->user()->id)->orderBy('updated_at', 'DESC')->get();

      return inertia('Gallery/MyTagSetting', ['userTags' => $user_tags]);
    }
}
