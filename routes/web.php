<?php
# @Date:   2020-01-16T06:26:18+00:00
# @Last modified time: 2020-03-26T18:44:13+00:00




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
Route::get('/{any?}', function () {
  return view('welcome');
})->where('any', '^(?!api\/)[\/\w\.-]*');
