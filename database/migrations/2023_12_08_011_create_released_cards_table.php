<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('released_cards', function (Blueprint $table) {
            $table->id();
            $table->string('product_code');
            $table->foreign('product_code')->references('product_code')->on('products')->cascadeOnUpdate()->restrictOnDelete();   // 外部キー制約。更新はカスケードし、削除は制限する。
            $table->string('list_number');
            $table->string('card_official_id')->unique();
            $table->foreign('card_official_id')->references('card_official_id')->on('cards')->cascadeOnUpdate()->cascadeOnDelete();   // 外部キー制約。更新・削除をカスケードする。
            $table->unique(['product_code', 'list_number']);   // 複合ユニーク
            $table->index('product_code', 'productCodeIndex');   // product_codeカラムにindexを貼る。index名はproductCodeIndex。
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // インデックスを削除
        // 例: $table->dropIndex('インデックス名');
        Schema::table('released_cards', function (Blueprint $table) {
            $table->dropIndex('productCodeIndex');
        });

        // テーブルを削除
        Schema::dropIfExists('released_cards');

    }
};
