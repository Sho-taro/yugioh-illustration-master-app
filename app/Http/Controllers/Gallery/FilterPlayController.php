<?php

namespace App\Http\Controllers\Gallery;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\DB;
// use Illuminate\Database\Query\JoinClause;
// use App\Models\UserTag;
use App\Models\ReleasedCard;
use Inertia\Inertia;
use App\Services\FilterCardService;

class FilterPlayController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, FilterCardService $filterCardService)
    {
      // dd($request->input());  // ユーザが入力した絞り込み条件をデバック
      $filters = $filterCardService->getRequestFilters($request->input());  // ユーザが入力した絞り込み条件を取得
      // dd($filters);

      // $filtersをセッションに保存
      // $request->session()->put('gallery_filters', $filters);

      // released_cardsテーブルのクエリビルダインスタンス
      $releasedCards_query = $filterCardService->buildReleasedCardsQuery($filters, 'MUCH');

      // dd($releasedCards_query->count());
      if ($releasedCards_query->count() === 0) {
        $released_cards_num = ReleasedCard::count();
        return inertia('Gallery/FilterSetting', ['errorMsg' => '該当するカードがありません。絞り込み条件を変更して下さい。', 'releasedCardsNum' => $released_cards_num, 'filters' => $request->input()]);
      }

      // クエリを実行してレコードを取得
      $cards = $releasedCards_query->orderBy('card_ja_kana', 'ASC')->get();          // 日本語カード名（読み）の昇順
      // dd($cards);

      return inertia('Gallery/Gallery', ['cards' => $cards]);
    }
}
