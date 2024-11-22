<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


/* Route::get('/usuarios', function () {
    return view('usuarios'); // Esta es la vista Blade que se cargará
}); */

Route::resource('cargos', CargoController::class);
Route::resource('empleados', EmpleadosController::class);
Route::resource('postres', PostresController::class);
Route::resource('tamanobebidas', TamanoBebidaController::class);
Route::resource('tamanoplatos', TamanoPlatoController::class);
Route::resource('platos', PlatosController::class);
Route::resource('bebidas', BebidasController::class);
Route::resource('menus', MenuController::class);


Route::get('/cargos', function () {
    return Inertia::render('Cargo');
})->middleware(['auth', 'verified'])->name('cargos');


Route::get('/empleados', function () {
    return Inertia::render('Empleado');
})->middleware(['auth', 'verified'])->name('empleados');


Route::get('/postres', function () {
    return Inertia::render('Postre');
})->middleware(['auth', 'verified'])->name('postres');


Route::get('/tamanobebidas', function () {
    return Inertia::render('TamanoBebida');
})->middleware(['auth', 'verified'])->name('tamanobebidas');


Route::get('/tamanoplatos', function () {
    return Inertia::render('TamanoPlato');
})->middleware(['auth', 'verified'])->name('tamanoplatos');


Route::get('/platos', function () {
    return Inertia::render('Plato');
})->middleware(['auth', 'verified'])->name('platos');


Route::get('/bebidas', function () {
    return Inertia::render('Bebida');
})->middleware(['auth', 'verified'])->name('bebidas');


Route::get('/menus', function () {
    return Inertia::render('Menu');
})->middleware(['auth', 'verified'])->name('menus');

Route::get('/', function () {
	return Inertia::render('app',);
});

require __DIR__.'/auth.php';
