<?php

namespace App\Http\Controllers\Admin\Race;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Race;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $data = Race::orderBy('updated_at', 'DESC')->paginate(15);
        return inertia('Admin/Race/Index', ['data' => $data]);
    }
}
