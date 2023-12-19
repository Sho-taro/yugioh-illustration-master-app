<?php

namespace App\Http\Controllers\Admin\ReleasedCard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ReleasedCard;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $data = ReleasedCard::orderBy('updated_at', 'DESC')->paginate(15);
        return inertia('Admin/ReleasedCard/Index', ['data' => $data]);
    }
}
