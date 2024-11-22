<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cargo extends Model
{
    use HasFactory;
    protected $fillable = ['nombre'];
    protected $primaryKey = 'id_cargo';

    public function empleados()
    {
        return $this->hasMany(Empleados::class);
    }
}
