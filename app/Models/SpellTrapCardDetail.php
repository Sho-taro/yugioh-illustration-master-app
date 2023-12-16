<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SpellTrapCardDetail extends Model
{
    use HasFactory;

    // spell_trap_card_detailsテーブルに明示的に紐付けする
    protected $table = 'spell_trap_card_details';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'card_official_id',
        'play_type_code',
    ];
}
