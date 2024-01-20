<?php

namespace App\Http\Controllers\Gallery;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ReleasedCard;
use App\Models\UserTag;
use Inertia\Inertia;

class SettingController extends Controller
{
  /**
   * Handle the incoming request.
   */
  public function __invoke(Request $request)
  {
    $filters = null;
    // セッションにfiltersがあれば、それを取得
    if ($request->session()->has('filters')) {
      $filters = $request->session()->get('filters');
    }

    // データベースに登録されているreleased_cardsの数を取得
    $released_cards_num = ReleasedCard::count();

    // ユーザーがログインしていたら、user_tagsを取得
    // dd($request->user());
    $user_tags = null;
    if (!is_null($request->user())) {
      // $user_tags = $request->user()->userTags;
      // updated_atの降順で$user_tagsを取得
      $user_tags = UserTag::where('user_id', $request->user()->id)->orderBy('updated_at', 'DESC')->get();
    }

    return inertia('Gallery/Setting', ['filters' => $filters, 'releasedCardsNum' => $released_cards_num, 'userTags' => $user_tags]);
  }
}