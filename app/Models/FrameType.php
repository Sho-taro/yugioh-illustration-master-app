<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FrameType extends Model
{
    use HasFactory;

    // frame_typesテーブルに明示的に紐付けする
    protected $table = 'frame_types';
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'frame_type_code',
        'name_en',
        'name_ja',
    ];
}
