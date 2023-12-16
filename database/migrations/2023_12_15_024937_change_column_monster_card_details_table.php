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
        // monster_card_detailsテーブルのカラム定義を修正
        Schema::table('monster_card_details', function (Blueprint $table) {
            // カラム名を変更
            // $table->renameColumn('from', 'to');
            $table->renameColumn('level or rank', 'level_or_rank');
            $table->renameColumn('link_val', 'link_value');
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
