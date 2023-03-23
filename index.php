<?php
require_once __DIR__ . "/vendor/autoload.php";

use Illuminate\Events\Dispatcher;
use Illuminate\Http\Request;
use Illuminate\Routing\Router;
use Illuminate\Database\Capsule\Manager as Capsule;

$capsule = new Capsule();
$capsule->addConnection(require_once "config.php");

$capsule->setAsGlobal();
$capsule->bootEloquent();

$router = new Router(new Dispatcher());
require_once __DIR__ . "/routes/web.php";
require_once __DIR__ . "/routes/api.php";
$request = Request::capture();
$response = $router->dispatch($request);
$response->send();
