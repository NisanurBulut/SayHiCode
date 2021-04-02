<?php

namespace app\controllers;

use app\core\Application;
use app\models\User;
use app\core\Request;
use app\core\Controller;

class AuthController extends Controller {

    public function __construct()
    {
        $userEntity = new User();
       $result = $userEntity->select();
    }
    public function login()
    {
        $this->setLayout('main');
        $params = [
            'name' => "Selam Nisanur"
        ];
        return $this->render('auth/login', $params);
    }
    public function register(Request $request)
    {
        $registerModel = new User();
        if($request->isPost())
        {
            $registerModel->loadData($request->getBody());

            if($registerModel->validate() && $registerModel->save()){
                Application::$app->response->redirect('/');
            }
            return $this->render('auth/register',[
                'model'=>$registerModel
            ]);
        }
        return $this->render('auth/register',[
            'model'=>$registerModel
        ]);
    }
}
