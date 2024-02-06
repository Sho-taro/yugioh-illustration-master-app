<?php

namespace App\Http\Controllers\Api\UserTag;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\ReleasedCardUserTag;
use App\Models\ReleasedCard;


class ThumbnailController extends Controller
{
  public function getReleasedCards (Request $request)
  {
    $user_tag_id = $request->input('userTagId');
    $released_card_user_tag_collection = DB::table('released_card_user_tags')
      ->select('released_card_id')
      ->where('user_tag_id', $user_tag_id)
      ->orderBy('updated_at', 'DESC')
      ->limit(6)
      ->get();

    // released_cardのidが格納された配列を作る
    $released_card_ids = [];
    foreach($released_card_user_tag_collection as $ele) {
      $released_card_ids[] = $ele->released_card_id;
    }

    $released_cards = ReleasedCard::whereIn('id', $released_card_ids)->get();

    // user_tagにタグ付けされたreleased_cardsの枚数を取得
    $released_cards_num = ReleasedCardUserTag::where('user_tag_id', $user_tag_id)->count();

    return response()->json(['releasedCards' => $released_cards, 'releasedCardsNum' => $released_cards_num]);
  }
}
