<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReleasedCard extends Model
{
    use HasFactory;

    // released_cardsテーブルに明示的に紐付けする
    protected $table = 'released_cards';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'product_code',
        'list_number',
        'card_official_id',
    ];
}
