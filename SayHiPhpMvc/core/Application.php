<?php

namespace app\core;

use app\core\Controller;


class Application
{
    public static string $ROOT_DIR;
    public Router $router;
    public Request $request;
    public Response $response;
    public static Application $app;
    public Controller $controller;
    public function __construct($rootPath)
    {
        self::$ROOT_DIR = $rootPath;
        self::$app = $this;
        $this->request = new Request();
        $this->response = new Response();
        $this->router = new Router($this->request, $this->response);
    }
    public function getController(){
        return $this->controller;
    }
    public function setController($controller){
        $this->controller->$controller;
    }
    public function run()
    {
        echo $this->router->resolve();
    }
}
