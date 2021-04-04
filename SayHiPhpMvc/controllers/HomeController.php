<?php

namespace app\controllers;

use app\core\Request;
use app\core\Controller;
use app\core\Application;

class HomeController extends Controller {

    public function home()
    {
        return $this->render('home');
    }
    public function profile()
    {
        return $this->render('profile');
    }
}
