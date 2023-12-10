<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Archetype extends Model
{
    use HasFactory;

    // archetypesテーブルに明示的に紐付けする
    protected $table = 'archetypes';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'archetype_code',
        'name_ja',
        'name_en',
    ];
}
