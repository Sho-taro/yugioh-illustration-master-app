<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;  // 追加
use Illuminate\Database\Eloquent\Relations\HasMany;   // 追加

class Product extends Model
{
    use HasFactory;

    // productsテーブルに明示的に紐付けする
    protected $table = 'products';
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'product_code',
        'name_ja',
        'name_en',
        'release_date'
    ];

    // Periodとのリレーション
    public function period() :BelongsTo
    {
        // Periodsテーブルの'name_en'カラムから、自身(Productsテーブル)の'period'カラムと一致する値を検索して関連レコードを取得する
        return $this->belongsTo(Period::class, 'name_en', 'period');
    }

    // Cardとのリレーション
    public function cards() :HasMany
    {
        // Cardsテーブルの'product_code'カラムから、自身（Productsテーブル）の'product_code'カラムと一致する値を検索して関連レコードを取得する
        return $this->hasMany(Card::class, 'product_code', 'product_code');
    }
}
