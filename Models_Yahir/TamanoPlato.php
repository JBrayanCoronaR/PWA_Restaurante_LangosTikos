<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TamanoPlato extends Model
{
    use HasFactory;
    protected $fillable = ['nombre'];
    protected $primaryKey = 'id_tamano_plato';

    // Relación con Platos
    public function platos()
    {
        return $this->hasMany(Platos::class);
    }
}
