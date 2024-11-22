<?php

namespace App\Http\Controllers;

use App\Models\TamanoPlato;
use Illuminate\Http\Request;

class TamanoPlatoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tamanos = TamanoPlato::all(); // Obtener todos los tamaños de platos
        return response()->json($tamanos);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
        ]);

        $tamano = TamanoPlato::create($validated); // Crear un nuevo tamaño de plato
        return response()->json($tamano, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $tamano = TamanoPlato::findOrFail($id); // Buscar el tamaño de plato por ID
        return response()->json($tamano);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'nombre' => 'sometimes|string|max:255',
        ]);

        $tamano = TamanoPlato::findOrFail($id); // Buscar el tamaño de plato por ID
        $tamano->update($validated); 
        return response()->json($tamano);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $tamano = TamanoPlato::findOrFail($id); 
        $tamano->delete(); 
        return response()->json(null, 204); 
    }
}
