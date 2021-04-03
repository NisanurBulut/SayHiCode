<?php namespace app\models; ?>
<?php


use app\core\Application;
use app\core\Model;
use app\models\User;

class LoginForm extends Model {

    public string $email='';
    public string $password='';

    public function rules():array{
        return [
            'email'=>[self::RULE_REQUIRED, self::RULE_EMAIL],
            'password'=>[self::RULE_REQUIRED]
        ];
    }
    public function login(){
        $user = User::find(['email'=>$this->email],"users");
        if(!$user) {
            // throw error
            $this->user->addError('email','User does not exist with this email address');
            return false;
        }
        if(!password_verify($this->password, $user->password)){
            $this->user->addError('password','Password is incorrect');
            return false;
        }

        Application::$app->login($user);
        return true;
    }
}
?>