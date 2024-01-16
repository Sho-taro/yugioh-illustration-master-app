<?php

namespace App\Http\Controllers\Api\UserTag;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\UserTag;
use App\Models\ReleasedCardUserTag;

class RemoveCardsStoreController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
      // imp: apiを受け付けるcontrollerの中ではdd()を使ってはいけない（エラーになる）

      // 送信されてきた情報を取得
      $user_tag_id = $request->input('userTagId');
      $released_card_id = $request->input('releasedCardId');

      $released_card_user_tag = ReleasedCardUserTag::where('user_tag_id', $user_tag_id)
                                                    ->where('released_card_id', $released_card_id)
                                                    ->firstOrFail();

      $released_card_user_tag->delete();

      // user_tagに登録されているreleased_cardのidを取得
      $released_card_user_tags = ReleasedCardUserTag::where('user_tag_id', $user_tag_id)->get();
      $released_card_id_arr = [];
      foreach($released_card_user_tags as $val) {
        $released_card_id_arr[] = $val->released_card_id;
      }

      return response()->json($released_card_id_arr);
    }
}
