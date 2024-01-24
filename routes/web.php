<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\ProductsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/dashboard2', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', 'rolecheck'])->name('dashboard2');

Route::get('/dashboard', function () {
    return Inertia::render('Home/Home');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/users', [UsersController::class, 'index'])->middleware(['auth', 'verified'])->name('users');
Route::get('/users/new', [UsersController::class, 'create'])->middleware(['auth', 'verified'])->name('adduser');
Route::get('/users/view/{id}', [UsersController::class, 'show'])->middleware(['auth', 'verified'])->name('viewuser');
Route::get('/users/delete/{id}', [UsersController::class, 'destroy'])->middleware(['auth', 'verified'])->name('deleteuser');
Route::put('/users/update/{id}', [UsersController::class, 'update'])->middleware(['auth', 'verified'])->name('updateuser');

Route::get('/products', [ProductsController::class, 'index'])->middleware(['auth', 'verified'])->name('products');
Route::get('/products/new', [ProductsController::class, 'create'])->middleware(['auth', 'verified'])->name('addproduct');
Route::get('/products/view/{id}', [ProductsController::class, 'show'])->middleware(['auth', 'verified'])->name('viewproduct');
Route::get('/products/delete/{id}', [ProductsController::class, 'destroy'])->middleware(['auth', 'verified'])->name('deleteproduct');
Route::put('/products/update/{id}', [ProductsController::class, 'update'])->middleware(['auth', 'verified'])->name('updateproduct');

Route::get('/yeet', function () {
    return Inertia::render('login/Login');
})->middleware(['auth', 'verified'])->name('yeet');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__.'/auth.php';
