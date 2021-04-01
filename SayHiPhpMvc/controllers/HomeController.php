<?php

namespace app\controllers;

use app\core\Application;
use app\core\Controller;

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
    public function handleContact()
    {
        return 'handling submitted data';
    }
}
