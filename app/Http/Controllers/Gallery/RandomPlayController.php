<?php

namespace App\Http\Controllers\Gallery;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class RandomPlayController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
      // released_cardsテーブルのクエリビルダインスタンスを取得
      $releasedCards_query = DB::table('released_cards');

      $cards = $releasedCards_query
        ->select(
          'released_cards.id as released_card_id',
          'cards.id as card_id',
          'released_cards.product_code',
          'released_cards.list_number',
          'cards.name_ja as card_ja',
          'cards.name_ja_kana as card_ja_kana',
          'cards.name_en as card_en',
        )
        ->join('cards', 'released_cards.card_official_id', '=', 'cards.card_official_id')
        ->orderBy('card_ja_kana', 'ASC') // 日本語カード名（読み）の昇順
        ->get();

        // dd($cards);

      return inertia('Gallery/Gallery', ['cards' => $cards]);
    }
}
