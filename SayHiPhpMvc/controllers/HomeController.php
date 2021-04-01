<?php

namespace app\controllers;

use app\core\Application;

class HomeController {

    public function home()
    {
        $params = [
            'name' => "Selam Nisanur"
        ];
        return Application::$app->router->renderView('home', $params);
    }
    public function handleContact()
    {
        return 'handling submitted data';
    }
}
