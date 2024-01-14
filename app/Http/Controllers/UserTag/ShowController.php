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

        $user_tag = UserTag::where('id', $user_tag_id)->firstOrFail();
        $released_card_user_tags = $user_tag->releasedCardUserTags;
        return inertia('UserTag/Show', ['userTag' => $user_tag, 'releasedCards' => $released_card_user_tags]);
    }
}
