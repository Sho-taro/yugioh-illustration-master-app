<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FrameType;

class GetDataController extends Controller
{
  public function getFrameTypesData (Request $request)
  {
    $frameTypesData = FrameType::orderBy('frame_type_code', 'ASC')->get();

    return response()->json($frameTypesData);
  }
}
