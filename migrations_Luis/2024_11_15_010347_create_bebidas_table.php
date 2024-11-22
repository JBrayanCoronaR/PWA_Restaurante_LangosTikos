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
        Schema::create('bebidas', function (Blueprint $table) {
            $table->id('id_bebida');
            $table->string('nombre');
            $table->text('descripcion');
            $table->decimal('precio', 8, 2);
            // Llave foránea para tamanoBebida
            $table->foreignId('id_tamano_bebida')->references('id_tamano_bebida')->on('tamano_bebidas')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bebidas');
    }
};
