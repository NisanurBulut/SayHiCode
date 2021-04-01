<?php



$app = new Application();

$app->$router->get('/', function(){
    return 'Merhaba Nisanur';
});


$app->run();