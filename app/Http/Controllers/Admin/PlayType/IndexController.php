<?php

namespace App\Http\Controllers\Admin\PlayType;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PlayType;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $data = PlayType::orderBy('updated_at', 'DESC')->paginate(15);
        return inertia('Admin/PlayType/Index', ['data' => $data]);
    }
}
