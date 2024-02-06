<?php

namespace App\Http\Controllers\Gallery;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Query\JoinClause;
use App\Models\UserTag;
use App\Models\ReleasedCardUserTag;
use Inertia\Inertia;

class MyTagPlayController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
      // released_card_user_tagに登録されたreleased_cardsを取得
      $released_card_user_tags = ReleasedCardUserTag::where('user_tag_id', $request->input('user-tag-id'))->get();

      // 登録されたカードが0枚のuserTagを選択した場合、エラーメッセージを表示
      if (count($released_card_user_tags) === 0) {
        // updated_atの降順で$user_tagsを取得
        $user_tags = UserTag::where('user_id', $request->user()->id)->orderBy('updated_at', 'DESC')->get();
        return inertia('Gallery/MyTagMode', ['errorMsg' => 'MyTagに登録されたカードがありません。カードを登録してから再度実行して下さい。', 'userTags' => $user_tags]);
      }

      // dd($released_card_user_tags);
      $released_card_id_arr = [];
      foreach($released_card_user_tags as $released_card_user_tag) {
        $released_card_id = $released_card_user_tag->released_card_id;
        $released_card_id_arr[] = $released_card_id;     // released_card_idを配列に格納
      }
      // dd($released_card_id_arr);

      // released_cardsテーブルのクエリビルダインスタンスを取得
      $releasedCards_query = DB::table('released_cards');
      $releasedCards_query
            ->select(
              'released_cards.id as released_card_id',
              'cards.id as card_id',
              'released_cards.product_code',
              'released_cards.list_number',
              'products.name_ja as product_ja',
              'products.name_en as product_en',
              'products.release_date',
              'periods.name as period',
              'cards.name_ja as card_ja',
              'cards.name_ja_kana as card_ja_kana',
              'cards.name_en as card_en',
              'frame_types.name_ja as frame_type_ja',
              'frame_types.name_en as frame_type_en',
              // 'archetypes.name_ja as archetype',   // 今は不要
              'attributes.name_ja as attribute',
              'monster_card_details.attack',
              'races.name_ja as race',
              'attributes.name_ja as attribute',
              'monster_card_details.level_or_rank',
              'monster_card_details.link_value',
              'spell_trap_play_types.name_ja as play_type',
            )
            ->join('products', 'released_cards.product_code', '=', 'products.product_code')
            ->join('periods', function (JoinClause $join) {
              $join->on('products.release_date', '>=', 'periods.start_date')
                    ->on('products.release_date', '<=', 'periods.end_date');
            })
            ->join('cards', 'released_cards.card_official_id', '=', 'cards.card_official_id')
            ->join('frame_types', 'cards.frame_type_code', '=', 'frame_types.frame_type_code')
            // ->join('archetypes', 'cards.archetype_code', '=', 'archetypes.archetype_code')   // 今は不要
            ->leftJoin('monster_card_details', 'cards.card_official_id', '=', 'monster_card_details.card_official_id')
            ->leftJoin('races', 'monster_card_details.race_code', '=', 'races.race_code')
            ->leftJoin('attributes', 'monster_card_details.attribute_code', '=', 'attributes.attribute_code')
            ->leftJoin('spell_trap_card_details', 'cards.card_official_id', '=', 'spell_trap_card_details.card_official_id')
            ->leftJoin('spell_trap_play_types', 'spell_trap_card_details.play_type_code', '=', 'spell_trap_play_types.play_type_code');

      $cards = $releasedCards_query->whereIn('released_cards.id', $released_card_id_arr)->get();

      return inertia('Gallery/Gallery', ['cards' => $cards]);
    }
}
