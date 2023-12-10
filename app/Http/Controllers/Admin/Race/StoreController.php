<?php

namespace App\Http\Controllers\Admin\Race;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Race;
use Inertia\Inertia;

class StoreController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        Race::create($request->validate([
            'race_code' => ['required', 'string', 'size:4', 'unique:races,race_code'],
            'name_ja' => ['required', 'string'],
            'name_en' => ['required', 'string']
        ]));

        // $data = Card::orderBy('updated_at', 'DESC')->paginate(15);    // paginateメソッドは、配列ではなくコレクション（jsonオブジェクト？）を返す
        $registeredRace = Race::orderBy('updated_at', 'DESC')->firstOrFail();

        // return redirect('/admin/card');
        return inertia('Admin/Race/Create', ['registeredRace' => $registeredRace, 'message' => 'raceを新規登録しました']);

    }
}
