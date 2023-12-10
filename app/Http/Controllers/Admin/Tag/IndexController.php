<?php

namespace App\Http\Controllers\Admin\Tag;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tag;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $data = Tag::orderBy('updated_at', 'DESC')->paginate(15);
        return inertia('Admin/Tag/Index', ['data' => $data]);
    }
}
