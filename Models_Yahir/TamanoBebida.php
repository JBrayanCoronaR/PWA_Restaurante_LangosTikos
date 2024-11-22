<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TamanoBebida extends Model
{
    use HasFactory;
    protected $fillable = ['nombre'];
    protected $primaryKey = 'id_tamano_bebida';

    public function bebidas()
    {
        return $this->hasMany(Bebidas::class);
    }
}
