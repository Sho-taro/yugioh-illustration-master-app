<?php

namespace App\Http\Controllers\UserTag;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UserTag\StoreRequest;   // FormRequestをuse（Laravel参考書 p.71〜）
use App\Models\UserTag;
// use App\Models\ReleasedCardUserTag;
// use Inertia\Inertia;

class StoreController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(StoreRequest $request)
    {
      // 以下のバリデーションはここでは不要（FormRequestでバリデーションしているため）
      // $registered_user_tag = UserTag::create($request->validate([
      //     'name' => ['required', 'string', 'max:20'],    // 最大20文字
      //     'status' => ['required', 'string', \Illuminate\Validation\Rule::in(['public', 'private'])],
      // ]));

      $user_tag = new UserTag;
      $user_tag->user_id = $request->user()->id;
      $user_tag->name = $request->input('name');
      // $user_tag->status = $request->input('status');
      $user_tag->status = 'public';
      $user_tag->popularity = 0;
      $user_tag->save();  // 保存

      $tags = UserTag::where('user_id', $request->user()->id)->get();

      $user_id = $request->user()->id;

      return redirect("/tags/{$user_id}")->with('storeUTMsg', "My Tag「{$request->input('name')}」を新規作成しました。");
    }
}
