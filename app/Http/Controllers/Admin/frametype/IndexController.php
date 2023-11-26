<?php

namespace App\Http\Controllers\Admin\frametype;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return inertia('Admin/FrameType/Index', []);
    }
}
