<?php

namespace app\controllers;

use app\core\Request;
use app\core\Controller;
use app\core\Application;

class HomeController extends Controller {

    public function home()
    {
        $params = [
            'name' => "Selam Nisanur"
        ];
        return $this->render('home', $params);
    }
    public function contact()
    {
        $params = [
            'name' => "Selam Nisanur"
        ];
        return $this->render('contact', $params);
    }
    public function handleContact(Request $request)
    {
        $body = $request->getBody();
        var_dump($body);
        return 'handling submitted data';
    }
}
