<?php

namespace App\Http\Controllers\Admin\frametype;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FrameType;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $data = FrameType::orderBy('created_at', 'DESC')->paginate(15);
        return inertia('Admin/FrameType/Index', ['data' => $data]);
    }
}
