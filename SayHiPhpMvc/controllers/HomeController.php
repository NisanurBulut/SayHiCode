<?php

namespace app\controllers;

use app\models\User;
use app\core\Request;
use app\core\Controller;
use app\core\Application;
use app\core\middlewares\AuthMiddleware;

class HomeController extends Controller {

   public function __constructor()
    {
        $this->registerMiddleware(new AuthMiddleware(['home']));
    }
    public function home()
    {
        $userEntity= new User();
        $users= $userEntity->select();
        return $this->render('home', ['users'=>$users]);
    }
}
