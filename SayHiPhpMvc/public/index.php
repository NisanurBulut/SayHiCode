<?php

use app\controllers\HomeController;
use app\core\Application;

require_once  __DIR__.'/../vendor/autoload.php';

$app = new Application(dirname((__DIR__)));

$app->router->get('/', 'home');
$app->router->get('/contact', [new HomeController,'contact']);
$app->router->post('/contact', [new HomeController,'handleContact']);


$app->run();
