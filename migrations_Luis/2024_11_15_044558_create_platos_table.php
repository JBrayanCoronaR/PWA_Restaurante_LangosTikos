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
        Schema::create('platos', function (Blueprint $table) {
            $table->id('id_plato');
            $table->string('nombre'); 
            $table->text('descripcion'); 
            $table->decimal('precio', 8, 2);
            // Llave foránea para tamanoPlato
            $table->foreignId('id_tamano_plato')->references('id_tamano_plato')->on('tamano_platos')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('platos');
    }
};
