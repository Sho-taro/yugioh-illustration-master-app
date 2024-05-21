<?php

namespace App\Http\Controllers\Gallery;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Query\JoinClause;
use App\Models\ReleasedCard;
use App\Services\FilterCardService;

class FilteredCardsNumController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, FilterCardService $filterCardService)
    {
      // ユーザが入力した絞り込み条件を取得
      $filters = $filterCardService->getRequestFiltersForCardsNum($request->input('body'));

      // カードの絞り込み対象
      $target = $filters['target'];

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
