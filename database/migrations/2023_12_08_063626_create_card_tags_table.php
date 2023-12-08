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
        Schema::create('card_tags', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tag_id')->constrained()->cascadeOnDelete();  // 削除をカスケードする。
            $table->string('released_card_id');
            $table->foreign('released_card_id')->references('released_card_id')->on('released_cards')->cascadeOnDelete();   // 外部キー制約。削除をカスケードする。
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('card_tags');
    }
};
