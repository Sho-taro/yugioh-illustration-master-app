<?php

namespace App\Http\Controllers\Gallery;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class RandomModeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
      // 登録されているカードの数を取得
      $released_cards_num = DB::table('released_cards')->count();

      // もしセッションにgallery_filtersがあるなら取得
      // $filters = null;
      // if ($request->session()->has('gallery_filters')) {
      //   $filters = $request->session()->get('gallery_filters');
      // }

      // return inertia('Gallery/RandomMode', ['releasedCardsNum' => $released_cards_num, 'filters' => $filters, ]);
      return inertia('Gallery/RandomMode', ['releasedCardsNum' => $released_cards_num, ]);
    }
}
