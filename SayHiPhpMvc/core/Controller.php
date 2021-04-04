<?php

namespace app\core;

use app\core\Application;
use app\core\middlewares\BaseMiddleware;

class Controller
{
    public string $layout = 'main';
    protected array $middlewares = [];
    public string $action = '';
    public function __construct()
    {
    }
    public function setLayout($layout)
    {
        $this->layout = $layout;
    }
    public function render($view, $params = [])
    {
        return Application::$app->view->renderView($view, $params);
    }
    public function registerMiddleware(BaseMiddleware $middleware)
    {
        $this->middlewares[] = $middleware;
    }


    /**
     * Get the value of middlewares
     */
    public function getMiddlewares()
    {
        return $this->middlewares;
    }
}
