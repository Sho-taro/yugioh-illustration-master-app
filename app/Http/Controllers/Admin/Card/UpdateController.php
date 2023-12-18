<?php

namespace App\Http\Controllers\Admin\Card;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\CardService;
use App\Models\Card;
use App\Models\MonsterCardDetail;
use App\Models\SpellTrapCardDetail;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class UpdateController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, CardService $cardService)
    {
        // URLのクエリパラメータからidを取得
        $id = (int)$request->route('id');

        // 取得したidを持つcardをデータベースから取得
        $card = Card::where('id', $id)->firstOrFail();

        $card_type = $cardService->getCardType($card->frame_type_code);  // カードタイプを取得
        if ($card_type === 'monster') {
            // カードタイプがmonsterだった場合の処理
            $detail = MonsterCardDetail::where('card_official_id', $card->card_official_id)->firstOrFail();

            // DBトランザクション
            DB::transaction(function () use ($request, $card, $detail) {
                // cardの変更内容をバリデートして更新
                $card->update($request->validate([
                    'name_ja' => ['required', 'string',],
                    'name_ja_kana' => ['required', 'string',],
                    'name_en' => ['required', 'string',],
                    'frame_type_code' => ['required', 'string', 'size:6', 'exists:frame_types,frame_type_code'],
                    'archetype_code' => ['required', 'string', 'size:6', 'exists:archetypes,archetype_code']
                ]));
                // monster_card_detailの変更内容をバリデートして更新
                $detail->update($request->validate([
                    'attack' => ['required', 'string',],
                    'defense' => ['required', 'string',],
                    'race_code' => ['required', 'string', 'size:6', 'exists:races,race_code'],
                    'attribute_code' => ['required', 'string',  'size:6', 'exists:attributes,attribute_code' ],
                    'level_or_rank' => ['required', 'string',],
                    'link_value' => ['required', 'string',]
                ]));
            });

        } elseif ($card_type === 'spell/trap') {
            // カードタイプがspell/trapだった場合の処理
            $detail = SpellTrapCardDetail::where('card_official_id', $card->card_official_id)->firstOrFail();

            // DBトランザクション
            DB::transaction(function () use ($request, $card, $detail) {
                // cardの変更内容をバリデートして更新
                $card->update($request->validate([
                    'name_ja' => ['required', 'string',],
                    'name_ja_kana' => ['required', 'string',],
                    'name_en' => ['required', 'string',],
                    'frame_type_code' => ['required', 'string', 'size:6', 'exists:frame_types,frame_type_code'],
                    'archetype_code' => ['required', 'string', 'size:6', 'exists:archetypes,archetype_code']
                ]));
                // spell_trap_card_detailの変更内容をバリデートして更新
                $detail->update($request->validate([
                    'play_type_code' => ['required', 'string', 'size:6', 'exists:spell_trap_play_types,play_type_code']
                ]));
            });
        }

        // // フォームに入力された内容をバリデーション
        // $cardData = $request->validate([
        //     'product_code' => ['required', 'string', 'exists:products,product_code'],   // exists　← 外部キー制約
        //     'list_number' => ['required', 'string'],
        //     'card_id' => ['required', 'string', 'min:8', 'max:8'],
        //     'name_en' => ['required', 'string'],
        //     'name_ja' => ['required', 'string'],
        //     'name_ja_kana' => ['required', 'string'],
        //     'frame_type' => ['required', 'string', 'exists:frame_types,name_en'],   // exists　← 外部キー制約
        //     'archetype' => ['string', 'nullable'],     // これだけ nullable
        // ]);
        // // dd($cardData);

        // // バリデーションエラーが無ければ、データベースを更新
        // $card->update($cardData);

        $data = Card::orderBy('updated_at', 'DESC')->paginate(15);    // paginateメソッドは、配列ではなくコレクション（jsonオブジェクト？）を返す


        // return redirect()->route('admin.card.index');
        return inertia('Admin/Card/Index', ['data' => $data, 'message' => "card_official_id: {$card->card_official_id} のカードを編集しました"]);
    }
}
