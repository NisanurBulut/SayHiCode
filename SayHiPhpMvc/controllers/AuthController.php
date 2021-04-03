<?php

namespace app\controllers;

use app\core\Application;
use app\models\User;
use app\core\Request;
use app\core\Controller;
use app\core\Response;
use app\models\loginForm;

class AuthController extends Controller {

    public function __construct()
    {
        $userEntity = new User();
        $result = $userEntity->select();
    }
    public function login(Request $request, Response $response)
    {
        $this->setLayout('main');
        $loginForm = new LoginForm();

        if($request->isPost()){
            $loginForm->loadData($request->getBody());
            if($loginForm->validate() && $loginForm->login()){
                $response->redirect('/');
                return;
            }
        }
        return $this->render('auth/login', ['model'=>$loginForm]);
    }
    public function register(Request $request)
    {
        $registerModel = new User();
        if($request->isPost())
        {
            $registerModel->loadData($request->getBody());

            if($registerModel->validate() && $registerModel->save()){
                Application::$app->session->setFlash('success','Thanks for registering');
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
    public function logout(Request $request, Response $response){
        Application::$app->logout();
        $response->redirect('/');
    }
}
