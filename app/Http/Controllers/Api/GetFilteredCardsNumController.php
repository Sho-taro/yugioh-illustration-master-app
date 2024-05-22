<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\DB;
// use Illuminate\Database\Query\JoinClause;
// use App\Models\ReleasedCard;
use App\Services\FilterCardService;

class GetFilteredCardsNumController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, FilterCardService $filterCardService)
    {
      $filters = $filterCardService->getRequestFilters($request->input());  // ユーザが入力した絞り込み条件を取得

      // released_cardsテーブルのクエリをビルド
      $releasedCards_query = $filterCardService->buildReleasedCardsQuery($filters, 'LITTLE');

      return response()->json($releasedCards_query->count());
    }
}
