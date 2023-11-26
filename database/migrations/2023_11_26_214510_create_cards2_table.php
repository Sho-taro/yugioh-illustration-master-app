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
        Schema::create('cards2', function (Blueprint $table) {
            $table->id();
            $table->string('product_code');
            $table->foreign('product_code')->references('product_code')->on('products')->cascadeOnDelete();   // 外部キー制約
            $table->string('list_number');
            $table->string('card_id');
            $table->string('name_en');
            $table->string('name_ja');
            $table->string('name_ja_kana');
            $table->string('frame_type');
            $table->foreign('frame_type')->references('name_en')->on('frame_types')->cascadeOnDelete();  //外部キー制約
            $table->string('archetype')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cards2');
    }
};
