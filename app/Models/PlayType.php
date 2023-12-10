<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlayType extends Model
{
    use HasFactory;

    // play_typesテーブルに明示的に紐付けする
    protected $table = 'spell_trap_play_types';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'play_type_code',
        'name_ja',
        'name_en',
    ];
}
