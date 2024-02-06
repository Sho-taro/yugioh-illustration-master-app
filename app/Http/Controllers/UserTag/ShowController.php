<?php

namespace App\Http\Controllers\UserTag;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ReleasedCard;
use App\Models\UserTag;
use App\Models\ReleasedCardUserTag;
use Inertia\Inertia;

class ShowController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
      $user_id = $request->user()->id;
      $user_tag_id = $request->route('userTagId');

      $user_tag = UserTag::where('id', $user_tag_id)->firstOrFail();
      $released_card_user_tags = $user_tag->releasedCardUserTags;

      $released_card_id_arr = [];
      foreach($released_card_user_tags as $released_card_user_tag) {
        $released_card_id = $released_card_user_tag->released_card_id;
        $released_card_id_arr[] = $released_card_id;     // released_card_idを配列に格納
      }

      // released_cardsを取得
      $released_cards_data = ReleasedCard::whereIn('id', $released_card_id_arr)->paginate(50)->withQueryString();

      // released_cardsの件数を取得
      $released_cards_num = count($released_card_id_arr);

      // フラッシュセッションのメッセージを格納
      $messages = [];
      // if ($request->session()->has('storeUTMsg')) {
      //   $messages['storeUTMsg'] = $request->session()->get('storeUTMsg');
      // }
      if ($request->session()->has('deleteUTMsg')) {
        $messages['deleteUTMsg'] = $request->session()->get('deleteUTMsg');
      }
      if ($request->session()->has('updateUTMsg')) {
        $messages['updateUTMsg'] = $request->session()->get('updateUTMsg');
      }

      return inertia('UserTag/Show', ['userTag' => $user_tag, 'releasedCardsNum' => $released_cards_num, 'releasedCardsData' => $released_cards_data, 'messages' => $messages]);
    }
}
