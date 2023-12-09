<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;   // 追加

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
        'name_ja',
        'name_en',
    ];

    public function cards() :HasMany
    {
        // cardsテーブルの'frame_type'カラムから、自身（frame_typesテーブル）の'name_en'カラムと一致する値を検索して関連レコードを取得する
        return $this->hasMany(Card::class, 'frame_type', 'name_en');
    }
}
