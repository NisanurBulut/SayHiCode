<?php
namespace app\core;


class Application
{
    public Router $router;
    public Request $request;

    public function __contructor ()
    {
        $this -> request = new Request();
        $this -> router = new Router($this -> request);
    }

    public function run()
    {
        $this -> router -> resolve();
    }
}