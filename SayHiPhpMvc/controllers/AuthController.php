<?php

namespace app\controllers;

use app\core\Request;
use app\core\Controller;
use app\models\RegisterModel;

class AuthController extends Controller {

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
        $registerModel = new RegisterModel();
        if($request->isPost())
        {
            $registerModel->loadData($request->getBody());

            if($registerModel->validate() && $registerModel->register()){
                return 'Success';
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
