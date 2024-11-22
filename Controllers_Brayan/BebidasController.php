<?php

namespace App\Http\Controllers;

use App\Models\Bebidas;
use App\Models\TamanoBebida;
use Illuminate\Http\Request;

class BebidasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bebidas = Bebidas::all();
        // $bebidas = Bebida::with('tamanoBebida')->get(); // Obtener todas las bebidas con su tamaño
        return response()->json($bebidas);

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
            'id_tamano_bebida' => 'required|exists:tamanobebidas,id_tamano_bebida',
        ]);

        $bebida = Bebidas::create($validated); // Crear una nueva bebida
        return response()->json($bebida, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $bebida = Bebidas::with('tamanobebidas')->findOrFail($id); // Buscar la bebida por ID y cargar su tamaño
        return response()->json($bebida);
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
            'id_tamano_bebida' => 'sometimes|exists:tamanobebidas,id_tamano_bebida',
        ]);

        $bebida = Bebidas::findOrFail($id); // Buscar la bebida por ID
        $bebida->update($validated); // Actualizar con los datos validados
        return response()->json($bebida);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $bebida = Bebidas::findOrFail($id); 
        $bebida->delete(); 
        return response()->json(null, 204); 
    }
}
