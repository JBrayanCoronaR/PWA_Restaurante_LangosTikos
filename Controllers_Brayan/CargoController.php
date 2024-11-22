<?php

namespace App\Http\Controllers;

use App\Models\Cargo;
use App\Models\Empleados;
use Illuminate\Http\Request;

class CargoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cargos = Cargo::all(); // Obtener todos los cargos
        return response()->json($cargos);
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

        $cargo = Cargo::create($validated); // Crear un nuevo cargo
        return response()->json($cargo, 201); // Devolver el cargo creado
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $cargo = Cargo::findOrFail($id); // Buscar el cargo por ID
        return response()->json($cargo);
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
        // Validar los datos entrantes
        $validated = $request->validate([
            'nombre' => 'required|string|max:255', // Asegurarse de que el nombre no esté vacío y sea una cadena
        ]);

        // Buscar el cargo
        $cargo = Cargo::findOrFail($id); 

        // Actualizar el cargo con los datos validados
        $cargo->update($validated); 

        // Retornar la respuesta con el cargo actualizado
        return response()->json($cargo);
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $cargo = Cargo::findOrFail($id); 
        $cargo->delete(); 
        return response()->json(null, 204); 
    }
}
