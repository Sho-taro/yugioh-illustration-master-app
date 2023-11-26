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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('product_code')->unique();
            $table->string('name_en')->unique();
            $table->string('name_ja')->unique();
            $table->string('period');   // 外部キー
            $table->foreign('period')->references('name_en')->on('periods')->cascadeOnDelete();   // periodsテーブルのname_enカラムを参照先として、periodsカラムに外部キー制約を追加
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
