<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bebidas extends Model
{
    use HasFactory;
    protected $fillable = ['nombre', 'descripcion', 'precio', 'id_tamano_bebida'];
    protected $primaryKey = 'id_bebida';

    public function tamanoBebida()
    {
        return $this->belongsTo(TamanoBebida::class, 'id_tamano_bebida');
    }

    public function menus()
    {
        return $this->hasMany(Menu::class);
    }
}
