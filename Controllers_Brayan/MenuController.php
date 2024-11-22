<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Models\Plato;
use App\Models\Bebida;
use App\Models\Postre;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Listar todos los menús
        //$menus = Menu::with(['plato', 'bebida', 'postre'])->get();
        $menus = Menu::all();
        return response()->json($menus);
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
        // Validar y guardar un nuevo menú
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'id_plato' => 'required|exists:platos,id_plato',
            'id_bebida' => 'required|exists:bebidas,id_bebida',
            'id_postre' => 'required|exists:postres,id_postre',
        ]);

        $menu = Menu::create($validated);
        return response()->json($menu, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Mostrar un menú específico
        $menu = Menu::with(['plato', 'bebida', 'postre'])->findOrFail($id);
        return response()->json($menu);
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
        // Validar y actualizar un menú existente
        $validated = $request->validate([
            'nombre' => 'sometimes|string|max:255',
            'id_plato' => 'sometimes|exists:platos,id_plato',
            'id_bebida' => 'sometimes|exists:bebidas,id_bebida',
            'id_postre' => 'sometimes|exists:postres,id_postre',
        ]);

        $menu = Menu::findOrFail($id);
        $menu->update($validated);
        return response()->json($menu);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Eliminar un menú
        $menu = Menu::findOrFail($id);
        $menu->delete();
        return response()->json(['message' => 'Menu eliminado']);
    }
}
