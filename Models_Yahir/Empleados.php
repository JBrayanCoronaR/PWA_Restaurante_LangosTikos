<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empleados extends Model
{
    use HasFactory;
    protected $fillable = ['nombre', 'id_cargo'];

    public function cargo()
    {
        return $this->belongsTo(Cargo::class, 'id_cargo');
    }
}
