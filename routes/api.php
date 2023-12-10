<?php

use App\Http\Controllers\API\LoginController;
use App\Http\Controllers\API\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
Route::get('/login', [LoginController::class,'login']);


Route::prefix('task')->middleware(['auth:sanctum'])->group(function () {
    Route::get('/', [TaskController::class, 'index']);
    Route::post('/create', [TaskController::class, 'create']);
    Route::put('/update', [TaskController::class, 'update']);
    Route::put('/conclued', [TaskController::class, 'conclued']);
    Route::delete('/delete', [TaskController::class, 'delete']);
});

