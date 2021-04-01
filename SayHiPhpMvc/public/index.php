<?php


require_once  __DIR__.'/../vendor/autoload.php';
use app\core\Application;


$app = new Application();

$app->router->get('/', function(){
    return 'Merhaba Nisanur';
});

$app->router->get('/selam', function(){
    return 'Selam Nisanur';
});

$app->run();