<?php

namespace App\Http\Controllers;

use App\Models\Platos;
use App\Models\TamanoPlato;
use Illuminate\Http\Request;

class PlatosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $platos = Platos::with('tamanoplatos')->get(); // Obtener todos los platos con su tamaño
        $platos = Platos::all();
        return response()->json($platos);
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
            'descripcion' => 'required|string',
            'precio' => 'required|numeric|min:0',
            'id_tamano_plato' => 'required|exists:tamanoplatos,id_tamano_plato',
        ]);

        $plato = Platos::create($validated); // Crear un nuevo plato
        return response()->json($plato, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $plato = Platos::with('tamanoplatos')->findOrFail($id); // Buscar el plato por ID y cargar su tamaño
        return response()->json($plato);
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
            'descripcion' => 'sometimes|string',
            'precio' => 'sometimes|numeric|min:0',
            'id_tamano_plato' => 'sometimes|exists:tamanoplatos,id_tamano_plato',
        ]);

        $plato = Platos::findOrFail($id); // Buscar el plato por ID
        $plato->update($validated); 
        return response()->json($plato);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $plato = Platos::findOrFail($id); 
        $plato->delete(); 
        return response()->json(null, 204); 
    }
}
