<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Postres extends Model
{
    use HasFactory;
    protected $fillable = [ 'nombre', 'descripcion', 'precio'];
    protected $primaryKey = 'id_postre';

    public function menus()
    {
        return $this->hasMany(Menu::class);
    }
}
