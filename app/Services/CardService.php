<?php

namespace App\Services;

class CardService {
  public function getCardType($frame_type_code) {
    if ($frame_type_code === 'FR0014' || $frame_type_code === 'FR0015') {
      return 'spell/trap';
    } else if ($frame_type_code === 'FR0016') {
      return 'token';
    } else if ($frame_type_code === 'FR0017') {
      return 'skill';
    } else {
      return 'monster';
    }
  }
}