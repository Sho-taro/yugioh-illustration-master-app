<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReleasedCardUserTag extends Model
{
    use HasFactory;

    // released_card_user_tagsテーブルに明示的に紐付けする
    protected $table = 'released_card_user_tags';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_tag_id',
        'released_card_id',
    ];
}
