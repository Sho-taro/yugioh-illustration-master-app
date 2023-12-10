<?php

namespace App\Http\Controllers\Admin\Archetype;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Archetype;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $data = Archetype::orderBy('updated_at', 'DESC')->paginate(15);
        return inertia('Admin/Archetype/Index', ['data' => $data]);
    }
}
