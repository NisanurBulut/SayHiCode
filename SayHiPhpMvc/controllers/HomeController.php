<?php

namespace app\controllers;

use app\core\Application;

class HomeController {

    public function contact()
    {
        return Application::$app->router->renderView('contact');
    }
    public function handleContact()
    {
        return 'handling submitted data';
    }
}
