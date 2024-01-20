<?php

namespace App\Http\Controllers\UserTag;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UserTag\UpdateNameRequest;   // FormRequestをuse（Laravel参考書 p.71〜）
use App\Models\UserTag;
use App\Models\ReleasedCardUserTag;
// use Inertia\Inertia;

class UpdateController extends Controller
{
    public function updateUserTagName (UpdateNameRequest $request)
    {
        // dd($request->input('userTagName'));
        // dd($request->route('userTagId'));
        $user_tag_id = $request->route('userTagId');    // user_tagのidを取得
        $user_tag = UserTag::find($user_tag_id);
        // dd($user_tag);
        $user_tag->name = $request->input('userTagName');
        $user_tag->save();

        $user_id = $request->user()->id;

        return redirect("/tags/{$user_id}/{$user_tag_id}")->with('message', 'MyTag名を変更しました。');
    }
}
