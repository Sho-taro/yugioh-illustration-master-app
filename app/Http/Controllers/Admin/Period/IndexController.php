<?php

namespace App\Http\Controllers\Admin\Period;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Period;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $data = Period::orderBy('updated_at','DESC')->paginate(15);
        return inertia('Admin/Period/Index', ['data' => $data]);
    }
}
