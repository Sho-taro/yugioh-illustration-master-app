<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;  // 追加

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
        'card_official_id',
        'name_ja',
        'name_ja_kana',
        'name_en',
        'frame_type_code',
        'archetype_code',
    ];

    public function product() :BelongsTo
    {
        // Productsテーブルの'product_code'カラムから、自身（Cardsテーブル）の'product_code'カラムと一致する値を検索して関連レコードを取得する
        return $this->belongsTo(Product::class, 'product_code', 'product_code');
    }

    public function frameType() :BelongsTo
    {
        // ＊これだけ第２引数と第３引数の順番が逆
        // 自身(Cardsテーブル)の'frame_type'カラムと一致する値を、frame_typesテーブルの'name_en'カラムから検索して関連レコードを取得する
        return $this->belongsTo(FrameType::class, 'frame_type', 'name_en');
    }
}
