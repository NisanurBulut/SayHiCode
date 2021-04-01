<?php

namespace app\controllers;

use app\core\Request;
use app\core\Controller;
use app\core\Application;

class AuthController extends Controller {

    public function login()
    {
        $params = [
            'name' => "Selam Nisanur"
        ];
        return $this->render('auth/login', $params);
    }
    public function register()
    {
        $params = [
            'name' => "Selam Nisanur"
        ];
        return $this->render('auth/register', $params);
    }
}
