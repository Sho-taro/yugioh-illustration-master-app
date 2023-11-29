<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    use HasFactory;

    // cardsテーブルに明示的に紐付けする
    protected $table = 'cards';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'product_code',
        'list_number',
        'card_id',
        'name_en',
        'name_ja',
        'name_ja_kana',
        'frame_type',
        'archetype',
    ];
}
