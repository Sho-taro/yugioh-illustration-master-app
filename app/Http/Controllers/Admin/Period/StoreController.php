<?php

namespace App\Http\Controllers\Admin\Period;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Period;
use Inertia\Inertia;

class StoreController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        Period::create($request->validate([
            'period_code' => ['required', 'string', 'size:6', 'unique:periods,period_code'],   // 6文字、unique
            'name' => ['required', 'string'],
            'start_date' => ['required', 'date_format:Y-m-d'],    // imp: dateのフォーマットはY-m-dのみ許可　（例: 2020-01-01）
            'end_date' => ['required', 'date_format:Y-m-d']
        ]));

        // $data = Period::orderBy('updated_at', 'DESC')->paginate(15);    // paginateメソッドは、配列ではなくコレクション（jsonオブジェクト？）を返す
        $registeredPeriod = Period::orderBy('updated_at', 'DESC')->firstOrFail();

        // return redirect('/admin/card');
        return inertia('Admin/Period/Create', ['registeredPeriod' => $registeredPeriod, 'message' => 'periodを新規登録しました']);
    }
}
