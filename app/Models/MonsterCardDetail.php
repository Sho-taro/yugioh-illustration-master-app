<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MonsterCardDetail extends Model
{
    use HasFactory;

    // monster_card_detailsテーブルに明示的に紐付けする
    protected $table = 'monster_card_details';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'card_official_id',
        'attack',
        'defense',
        'race_code',
        'attribute_code',
        'level or rank',
        'link_value',
    ];
}
