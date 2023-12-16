<?php

namespace App\Http\Controllers\Admin\ReleasedCard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ReleasedCard;
use Inertia\Inertia;


class StoreController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // dd($request->all());

        $registeredData = [];
        $registeredData['released_card'] = ReleasedCard::create($request->validate([
            'card_official_id' => ['required', 'string', 'size:8', 'exists:cards,card_official_id'],
            'product_code'=> ['required', 'string', 'exists:products,product_code'],
            'list_number' => ['required', 'string',]
            // todo: product_codeカラムとlist_numberカラムでの複合ユニーク制約は、やり方がわからなかったため未実装
        ]));

        return inertia('Admin/Card/Create', ['registeredData' => $registeredData ,'message' => 'カードの新イラストを登録しました']);
    }
}
