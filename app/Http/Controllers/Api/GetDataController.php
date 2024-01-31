<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FrameType;
use App\Models\Race;
use App\Models\Attribute;

class GetDataController extends Controller
{
  public function getFrameTypeData (Request $request)
  {
    $frameTypeData = FrameType::orderBy('frame_type_code', 'ASC')->get();

    return response()->json($frameTypeData);
  }

  public function getRaceData (Request $request)
  {
    $raceData = Race::orderBy('race_code', 'ASC')->get();

    return response()->json($raceData);
  }

  public function getAttributeData (Request $request)
  {
    $attributeData = Attribute::orderBy('attribute_code', 'ASC')->get();

    return response()->json($attributeData);
  }
}
