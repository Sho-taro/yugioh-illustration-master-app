<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Query\JoinClause;
use App\Models\ReleasedCard;
use App\Services\FilterCardService;

class GetFilteredCardsNumController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, FilterCardService $filterCardService)
    {
      $filters = $filterCardService->getRequestFilters($request->input());  // ユーザが入力した絞り込み条件を取得

      // 絞り込み条件に合致するカードの枚数を取得する関数
      $target = $request->input('target');  // カードの絞り込み対象を取得
      // $keyword = $request->input('card-name'); // カード検索のキーワードを取得

      // released_cardsテーブルのクエリビルダインスタンス
      $releasedCards_query = null;

      // DBからレコードを取得するためのクエリをビルド
      if ($target === 'monster') {
        // 絞り込み対象がmonsterの場合
        $releasedCards_query = $filterCardService->buildReleasedCardsQueryForMonsters($filters, 'LITTLE');
      } else if ($target === 'spell') {
        // 絞り込み対象がspellの場合
        $releasedCards_query = $filterCardService->buildReleasedCardsQueryForSpells($filters, 'LITTLE');
      } else if ($target === 'trap') {
        // 絞り込み対象がtrapの場合
        $releasedCards_query = $filterCardService->buildReleasedCardsQueryForTraps($filters, 'LITTLE');
      } else if ($target === 'all') {
        $releasedCards_query = $filterCardService->buildReleasedCardsQueryForAll($filters, 'LITTLE');
      }

      // periodの条件で絞り込みするクエリを生成
      $releasedCards_query = $filterCardService->addPeriodQuery($releasedCards_query, $filters);

      // キーワードで絞り込みするクエリを生成
      $releasedCards_query = $filterCardService->addKeywordQuery($releasedCards_query, $filters);

      return response()->json($releasedCards_query->count());
    }
}
