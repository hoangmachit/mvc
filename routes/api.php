<?php

use Illuminate\Routing\Router;
use App\Http\Controllers\Api\ConfigController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\HomeController;
use App\Http\Controllers\Api\IndexController;
use App\Http\Controllers\Api\ProductController;
// $router->group(['prefix' => 'api', 'middleware' => 'auth'], function (Router $router) {
$router->group(['prefix' => 'api'], function (Router $router) {
    $router->get('/', [HomeController::class, 'index']);
    $router->get('/index', [IndexController::class, 'index']);
    $router->get('/config', [ConfigController::class, 'index']);
    $router->get('/user', [UserController::class, 'index']);
    $router->get('/user/{id}', [UserController::class, 'show']);
    $router->post('/user', [UserController::class, 'store']);
    $router->put('/user/{id}', [UserController::class, 'update']);
    $router->delete('/user/{id}', [UserController::class, 'destroy']);
    $router->group(['prefix' => 'product'], function (Router $router) {
        $router->get('/', [ProductController::class, 'index']);
        $router->get('/{slug}', [ProductController::class, 'show']);
    });
});