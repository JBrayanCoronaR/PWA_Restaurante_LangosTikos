<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;
    // Permitir asignación masiva para los campos
    protected $fillable = ['nombre', 'id_plato', 'id_bebida', 'id_postre'];
    protected $primaryKey = 'id_menu';

    public function plato()
    {
        return $this->belongsTo(Platos::class, 'id_plato');
    }

    public function bebida()
    {
        return $this->belongsTo(Bebidas::class, 'id_bebida');
    }

    public function postre()
    {
        return $this->belongsTo(Postres::class, 'id_postre');
    }
}
