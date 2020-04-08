<?php
# @Date:   2020-01-16T06:26:18+00:00
# @Last modified time: 2020-03-27T21:45:23+00:00




use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('login', 'API\PassportController@login');
Route::post('register', 'API\PassportController@register');


Route::middleware('auth:api')->group(function () {

    Route::get('user', 'API\PassportController@user');
    Route::get('logout', 'API\PassportController@logout');

    Route::resource('courses', 'API\CourseController')->except([
        'create', 'edit', 'delete', 'show'
    ]);
    Route::resource('lecturers', 'API\LecturerController')->except([
        'create', 'edit'
    ]);
    Route::resource('enrolments', 'API\EnrolmentController')->except([
        'create', 'edit'
    ]);
});
