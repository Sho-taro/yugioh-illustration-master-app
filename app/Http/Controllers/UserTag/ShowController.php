<?php

namespace App\Http\Controllers\UserTag;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\UserTag;
use App\Models\ReleasedCardUserTag;
use Inertia\Inertia;

class ShowController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $user_id = $request->user()->id;
        $user_tag_id = $request->route('userTagId');
        return inertia('UserTag/Show', ['userId' => $user_id, 'userTagId' => $user_tag_id]);
    }
}
