<?php

namespace App\Http\Controllers\Admin\Card;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Card;
use App\Models\ReleasedCard;
use App\Models\MonsterCardDetail;
use App\Models\SpellTrapCardDetail;
use Inertia\Inertia;

class StoreController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // $cardData = request()->all();
        // dd($cardData);

        $storedCard = null;
        $storedReleasedCard = null;
        $storedMonsterDetail = null;
        $storedSpellTrapCardDetail = null;

        // DBトランザクション。試行回数は1回（1回失敗したら例外をスロー）。
        DB::transaction(function () use ($request, $storedCard) {
            // cardsテーブルに登録
            $storedCard = Card::create($request->validate([
                'card_official_id' => ['required', 'string', 'size:8', 'unique:cards,card_official_id'],
                'name_ja' => ['required', 'string',],
                'name_ja_kana' => ['required', 'string',],
                'name_en' => ['required', 'string',],
                'frame_type_code' => ['required', 'string', 'size:6', 'exists:frame_types,frame_type_code'],
                'archetype_code' => ['required', 'string', 'size:6', 'exists:archetypes,archetype_code']
            ]));

            // released_cardsテーブルに登録
            $storedReleasedCard = ReleasedCard::create($request->validate([
                'card_official_id' => ['required', 'string', 'size:8', 'exists:cards,card_official_id'],
                'product_code'=> ['required', 'string', 'exists:products,product_code'],
                'list_number' => ['required', 'string',]
                // todo: product_codeカラムとlist_numberカラムでの複合ユニーク制約は、やり方がわからなかったため未実装
            ]));

            if ($request->input('cardType') === 'monster') {
                // monster_card_detailsテーブルに登録
                $storedMonsterDetail = MonsterCardDetail::create($request->validate([
                    'card_official_id' => ['required', 'string', 'size:8', 'exists:cards,card_official_id'],
                    'attack' => ['required', 'string',],
                    'defense' => ['required', 'string',],
                    'race_code' => ['required', 'string', 'size:6', 'exists:races,race_code'],
                    'attribute_code' => ['required', 'string',  'size:6', 'exists:attributes,attribute_code' ],
                    'level_or_rank' => ['required', 'string',],
                    'link_value' => ['required', 'string',]
                ]));
            } else if ($request->input('cardType') === 'spell/trap') {
                // spell_trap_card_detailsテーブルに登録
                $storedSpellTrapCardDetail = SpellTrapCardDetail::create($request->validate([
                    'card_official_id' => ['required', 'string', 'size:8', 'exists:cards,card_official_id'],
                    'play_type_code' => ['required', 'string', 'size:6', 'exists:spell_trap_play_types,play_type_code']
                ]));
            }
        }, 1);

        return inertia('Admin/Card/Create', ['registeredCard' => $storedCard ,'message' => 'カードを新規登録しました']);
    }
}
