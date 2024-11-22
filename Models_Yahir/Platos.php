<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Platos extends Model
{
    use HasFactory;
    protected $fillable = ['nombre', 'descripcion', 'precio', 'id_tamano_plato'];
    protected $primaryKey = 'id_plato';

    public function tamanoPlato()
    {
        return $this->belongsTo(TamanoPlato::class, 'id_tamano_plato');
    }

    public function menus()
    {
        return $this->hasMany(Menu::class);
    }
}
