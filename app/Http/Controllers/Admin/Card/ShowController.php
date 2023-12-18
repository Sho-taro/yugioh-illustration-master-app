<?php

namespace App\Http\Controllers\Admin\Card;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\CardService;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Query\JoinClause;
use Inertia\Inertia;
use App\Models\Card;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ShowController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, CardService $cardService)
    {
        // // URLのクエリパラメータからidを取得
        $id = (int)$request->route('id');

        // 1. idが一致するcard情報をデータベースから取得する
        $card = Card::where('id', $id)->firstOrFail();
        // もし一致するカードが見つからなければエラー
        if(is_null($card)) {
            throw new NotFoundHttpException('該当するカードが見つかりませんでした');
        }

        $card_type = $cardService->getCardType($card->frame_type_code);  // カードタイプを取得
        if ($card_type === 'monster') {
            // カードタイプがmonsterだった場合の処理
            $card_detail = DB::table('cards')
                            ->join('monster_card_details', 'cards.card_official_id', '=', 'monster_card_details.card_official_id')
                            ->where('cards.id', $id)
                            ->select('*', 'cards.id as id')   // カラム名の重複でcards.idカラムが上書きされないようにするための処置
                            ->first();
        } elseif ($card_type === 'spell/trap') {
            // カードタイプがspell/trapだった場合の処理
            $card_detail = DB::table('cards')
                            ->join('spell_trap_card_details', 'cards.card_official_id', '=', 'spell_trap_card_details.card_official_id')
                            ->where('cards.id', $id)
                            ->select('*', 'cards.id as id')   // カラム名の重複でcards.idカラムが上書きされないようにするための処置
                            ->first();
        }
        // dd($card_detail);


        // 2. 1で取得したカード情報に紐付くreleased_cards、product、periodを取得する
        // released_cardsテーブルのクエリビルダインスタンスを取得
        $rc_query = DB::table('released_cards');

        // card_official_idが一致するreleased_cardに絞り込むクエリをチェーン
        $rc_query->where('released_cards.card_official_id', $card->card_official_id);

        // productsテーブルとinner joinするクエリをチェーン
        $rc_query->join('products', 'released_cards.product_code', '=', 'products.product_code');

        // periodsテーブルとinner joinするクエリをチェーン（結合条件: 'products.release_date'が'periods.start_date'以上'periods.end_date'以下）
        // 「上級join句」を使用
        $rc_query->join('periods', function (JoinClause $join) {
            $join->on('products.release_date', '>=', 'periods.start_date')
                ->on('products.release_date', '<=', 'periods.end_date');
        });

        $rc_query->select('*', 'released_cards.id as id');   // カラム名の重複でreleased_cards.idカラムが上書きされないようにするための処置

        // クエリビルダを実行
        $released_cards = $rc_query->get();
        // dd($released_cards);

        return inertia('Admin/Card/Show', ['cardDetail' => $card_detail, 'releasedCards' => $released_cards]);
    }
}
