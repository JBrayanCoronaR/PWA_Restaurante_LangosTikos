<?php

namespace App\Http\Controllers;

use App\Models\Postres;
use Illuminate\Http\Request;

class PostresController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $postres = Postres::all(); // Obtener todos los postres
        return response()->json($postres);
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
        ]);

        $postre = Postres::create($validated); // Crear un nuevo postre
        return response()->json($postre, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $postre = Postres::findOrFail($id); // Buscar el postre por ID
        return response()->json($postre);
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
        ]);

        $postre = Postres::findOrFail($id); // Buscar el postre por ID
        $postre->update($validated); 
        return response()->json($postre);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id_postre)
    {
        //echo "Si llega: $id_postre"; 
        
        $postre = Postres::find($id_postre);
        $postre->delete();
        
        return response()->json(null, 204);
    }

}
