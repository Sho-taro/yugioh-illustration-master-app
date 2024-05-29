<?php

namespace App\Http\Controllers\Gallery;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\DB;
// use Illuminate\Database\Query\JoinClause;
// use App\Models\ReleasedCard;
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

      // released_cardsテーブルのクエリビルダインスタンス
      $releasedCards_query = $filterCardService->buildReleasedCardsQuery($filters, 'LITTLE');

      return response()->json($releasedCards_query->count());
    }
}