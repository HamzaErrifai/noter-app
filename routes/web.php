<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/logout', function () {
  Auth::logout();
  return redirect('/home');
});



Route::get('/api/notes', [App\Http\Controllers\NoteController::class, 'getNotes']);
Route::post('/api/addnote', [App\Http\Controllers\NoteController::class, 'addNote']);
Route::post('/api/updatenote/{id}', [App\Http\Controllers\NoteController::class, 'updateNote']);
Route::delete('/api/deletenote/{id}', [App\Http\Controllers\NoteController::class, 'deleteNote']);
