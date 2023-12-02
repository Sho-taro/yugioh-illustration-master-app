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
            'name_en' => ['required', 'string', 'unique:periods,name_en'],
            'name_ja' => ['required', 'string', 'unique:periods,name_ja']
        ]));

        // $data = Period::orderBy('updated_at', 'DESC')->paginate(15);    // paginateメソッドは、配列ではなくコレクション（jsonオブジェクト？）を返す
        $registeredPeriod = Period::orderBy('updated_at', 'DESC')->firstOrFail();

        // return redirect('/admin/card');
        return inertia('Admin/Period/Create', ['registeredPeriod' => $registeredPeriod, 'message' => 'periodを新規登録しました']);

    }
}
