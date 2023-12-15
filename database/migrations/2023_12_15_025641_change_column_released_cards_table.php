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
        // released_cardsテーブルのカラム定義を修正
        Schema::table('released_cards', function (Blueprint $table) {
            // カラム定義を変更
            $table->string('card_official_id')->change();  // note: ここのunique制約を消した
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
