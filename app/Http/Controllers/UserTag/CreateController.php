<?php

namespace App\Http\Controllers\UserTag;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
// use App\Models\UserTag;
// use App\Models\ReleasedCardUserTag;
use Inertia\Inertia;

class CreateController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return inertia('UserTag/Create', []);
    }
}
