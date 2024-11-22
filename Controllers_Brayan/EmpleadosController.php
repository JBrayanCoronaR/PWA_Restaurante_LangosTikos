<?php

namespace App\Http\Controllers;

use App\Models\Empleados;
use App\Models\Cargo;
use Illuminate\Http\Request;

class EmpleadosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $empleados = Empleados::all(); // Obtener empleados con su cargo relacionado
        return response()->json($empleados);
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
            'id_cargo' => 'required|exists:cargos,id_cargo', // Validar que el cargo exista
        ]);

        $empleado = Empleados::create($validated); // Crear el empleado
        return response()->json($empleado, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $empleado = Empleados::findOrFail($id); // Buscar el empleado por ID con su cargo
        return response()->json($empleado);
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
            'id_cargo' => 'sometimes|exists:cargos,id_cargo', // Validar que el cargo exista
        ]);

        $empleado = Empleados::findOrFail($id); // Buscar el empleado por ID
        $empleado->update($validated); // Actualizar con los datos validados
        return response()->json($empleado);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $empleado = Empleados::findOrFail($id); 
        $empleado->delete(); 
        return response()->json(null, 204); 
    }
}
