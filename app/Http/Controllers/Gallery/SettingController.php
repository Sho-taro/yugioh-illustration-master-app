<?php

namespace App\Http\Controllers\Gallery;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingController extends Controller
{
  /**
   * Handle the incoming request.
   */
  public function __invoke(Request $request)
  {
    $filters = null;

    // セッションにfiltersがあれば、それを取得
    if ($request->session()->has('filters')) {
      $filters = $request->session()->get('filters');
    }

    return inertia('Gallery/Setting', ['filters' => $filters]);
  }
}