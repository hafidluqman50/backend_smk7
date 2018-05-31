<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

// $router->get('/', function () use ($router) {
//     return $router->app->version();
// });
$router->post('/login',['as'=>'login-post','uses'=>'AuthController@auth']);
$router->group(['prefix'=>'api','middleware'=>'cros'],function() use ($router){
	$router->get('/barang','BarangController@barang');
	$router->get('/get-user','AuthController@getUser');
});
