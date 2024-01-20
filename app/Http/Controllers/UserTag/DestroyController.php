<?php

namespace App\Http\Controllers\UserTag;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\UserTag;

class DestroyController extends Controller
{
    public function deleteUserTag (Request $request)
    {
      $user_tag_id = (int)$request->route('userTagId');
      $user_tag = UserTag::where('id', $user_tag_id)->firstOrFail();

      // user_tag名を取得
      $user_tag_name = $user_tag->name;

      // userTagを削除
      $user_tag->delete();

      //user_idを取得
      $user_id = (int)$request->user()->id;

      return redirect("/tags/{$user_id}")->with('message', "MyTag「{$user_tag_name}」を削除しました。");
    }
}
