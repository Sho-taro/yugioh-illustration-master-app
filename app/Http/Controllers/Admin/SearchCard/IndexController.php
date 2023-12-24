<?php

namespace App\Http\Controllers\Admin\SearchCard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Card;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Query\JoinClause;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // dd($request->input());

        if (empty($request->input('access-type'))) {
            return inertia('Admin/SearchCard/Index', []);
        } elseif ($request->input('access-type') === 'filtering') {
            return inertia('Admin/SearchCard/Index', []);
        }
    }
}
