<?php

namespace App\Http\Controllers\Admin\Attribute;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Attribute;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $data = Attribute::orderBy('updated_at', 'DESC')->paginate(15);
        return inertia('Admin/Attribute/Index', ['data' => $data]);
    }
}
