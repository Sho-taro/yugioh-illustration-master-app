<?php

namespace App\Http\Controllers\Admin\Archetype;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Archetype;
use Inertia\Inertia;

class StoreController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        Archetype::create($request->validate([
            'archetype_code' => ['required', 'string', 'size:6', 'unique:archetypes,archetype_code'],
            'name_ja' => ['required', 'string'],
            'name_en' => ['required', 'string']
        ]));

        // $data = Card::orderBy('updated_at', 'DESC')->paginate(15);    // paginateメソッドは、配列ではなくコレクション（jsonオブジェクト？）を返す
        $registeredArchetype = Archetype::orderBy('updated_at', 'DESC')->firstOrFail();

        // return redirect('/admin/card');
        return inertia('Admin/Archetype/Create', ['registeredArchetype' => $registeredArchetype, 'message' => 'archetypeを新規登録しました']);

    }
}
