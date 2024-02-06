<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FrameType;
use App\Models\Race;
use App\Models\Attribute;
use Illuminate\Support\Facades\DB;
use App\Models\Period;


class GetDataController extends Controller
{
  public function getFrameTypeData (Request $request)
  {
    $frameTypeData = FrameType::whereNotIn('name_en', ['spell', 'trap', 'token', 'skill'])
      ->orderBy('frame_type_code', 'ASC')
      ->get();

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

  public function getSpellPlayTypeData (Request $request)
  {
    // spell_trap_play_typesはモデルを作っていないため、DBファサードで対応
    $playTypeData = DB::table('spell_trap_play_types')->where('name_en', '<>', 'Counter')
      ->orderBy('play_type_code', 'ASC')
      ->get();

    return response()->json($playTypeData);
  }

  public function getTrapPlayTypeData (Request $request)
  {
    // spell_trap_play_typesはモデルを作っていないため、DBファサードで対応
    $playTypeData = DB::table('spell_trap_play_types')->whereNotIn('name_en', ['Field', 'Equip', 'Quick-play', 'Ritual'])
      ->orderBy('play_type_code', 'ASC')
      ->get();

    return response()->json($playTypeData);
  }

  public function getPeriodData (Request $request)
  {
    $periodData = Period::orderBy('period_code', 'DESC')->get();

    return response()->json($periodData);
  }
}
