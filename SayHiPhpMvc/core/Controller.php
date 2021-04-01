<?php

namespace app\core;
use app\core\Application;

class Controller {
    public function render ($view, $params=[])
    {
        return Application::$app->router->renderView($view, $params);
    }
}
