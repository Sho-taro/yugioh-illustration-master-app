<?php

namespace App\Http\Controllers\UserTag\ReleasedCardUserTag;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\UserTag;
use App\Models\ReleasedCardUserTag;

class DestroyController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // dd($request->input('releasedCardIds'));
        $user_tag_id = $request->route('userTagId');

        $released_card_user_tags = ReleasedCardUserTag::where('user_tag_id', $user_tag_id)
            ->whereIn('released_card_id', $request->input('releasedCardIds'))
            ->get();
        // dd($released_card_user_tags);

        // DBトランザクション。試行回数は2回。
        DB::transaction(function () use ($released_card_user_tags) {
          foreach ($released_card_user_tags as $val) {
            $val->delete();
          };
        }, 2);

        $user_id = $request->user()->id;

        return redirect("/tags/{$user_id}/{$user_tag_id}")->with('message', '登録カードを正常に削除しました。');
    }
}
