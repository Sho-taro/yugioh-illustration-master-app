<?php

namespace App\Http\Controllers\Admin\Archetype;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CreateController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return inertia('Admin/Archetype/Create', []);
    }
}
