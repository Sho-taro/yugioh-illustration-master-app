<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'card_id',
        'pack_name',
        'list_number',
        'name_en',
        'name_ja',
        'name_ja_kana',
        'frame_type',
        'archetype',
    ];
}
