<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CargoController;
use App\Http\Controllers\EmpleadosController;
use App\Http\Controllers\PostresController;
use App\Http\Controllers\TamanoBebidaController;
use App\Http\Controllers\TamanoPlatoController;
use App\Http\Controllers\PlatosController;
use App\Http\Controllers\BebidasController;
use App\Http\Controllers\MenuController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('cargos', [CargoController::class, 'index']);
Route::post('cargos', [CargoController::class, 'store']);
Route::get('cargos/{id}', [CargoController::class, 'show']);
Route::put('cargos/{id}', [CargoController::class, 'update']);
Route::delete('cargos/{id}', [CargoController::class, 'destroy']);


Route::get('empleados', [EmpleadosController::class, 'index']);
Route::post('empleados', [EmpleadosController::class, 'store']);
Route::get('empleados/{id}', [EmpleadosController::class, 'show']);
Route::put('empleados/{id}', [EmpleadosController::class, 'update']);
Route::delete('empleados/{id}', [EmpleadosController::class, 'destroy']);


Route::get('postres', [PostresController::class, 'index']);
Route::post('postres', [PostresController::class, 'store']);
Route::get('postres/{id}', [PostresController::class, 'show']);
Route::put('postres/{id}', [PostresController::class, 'update']);
Route::delete('postres/{id}', [PostresController::class, 'destroy']);


Route::get('tamanobebidas', [TamanoBebidaController::class, 'index']);
Route::post('tamanobebidas', [TamanoBebidaController::class, 'store']);
Route::get('tamanobebidas/{id}', [TamanoBebidaController::class, 'show']);
Route::put('tamanobebidas/{id}', [TamanoBebidaController::class, 'update']);
Route::delete('tamanobebidas/{id}', [TamanoBebidaController::class, 'destroy']);


Route::get('tamanoplatos', [TamanoPlatoController::class, 'index']);
Route::post('tamanoplatos', [TamanoPlatoController::class, 'store']);
Route::get('tamanoplatos/{id}', [TamanoPlatoController::class, 'show']);
Route::put('tamanoplatos/{id}', [TamanoPlatoController::class, 'update']);
Route::delete('tamanoplatos/{id}', [TamanoPlatoController::class, 'destroy']);


Route::get('platos', [PlatosController::class, 'index']);
Route::post('platos', [PlatosController::class, 'store']);
Route::get('platos/{id}', [PlatosController::class, 'show']);
Route::put('platos/{id}', [PlatosController::class, 'update']);
Route::delete('platos/{id}', [PlatosController::class, 'destroy']);


Route::get('bebidas', [BebidasController::class, 'index']);
Route::post('bebidas', [BebidasController::class, 'store']);
Route::get('bebidas/{id}', [BebidasController::class, 'show']);
Route::put('bebidas/{id}', [BebidasController::class, 'update']);
Route::delete('bebidas/{id}', [BebidasController::class, 'destroy']);


Route::get('menus', [MenuController::class, 'index']);
Route::post('menus', [MenuController::class, 'store']);
Route::get('menus/{id}', [MenuController::class, 'show']);
Route::put('menus/{id}', [MenuController::class, 'update']);
Route::delete('menus/{id}', [MenuController::class, 'destroy']);



