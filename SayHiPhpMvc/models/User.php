<?php

namespace app\models;

use app\core\DbModel;

class User extends DbModel
{
    public string $firstName ='';
    public string $lastName='';
    public string $email='';
    public string $password='';
    public string $passwordConfirm='';

    public function tableName():string{
        return 'users';
    }

    public function register()
    {
        $this->save();
    }
    public function rules(): array
    {
        return [
            'firstName' => [self::RULE_REQUIRED],
            'lastName' => [self::RULE_REQUIRED],
            'email' => [self::RULE_REQUIRED],
            'password' => [self::RULE_REQUIRED, [self::RULE_MIN, 'min'=> 1], [self::RULE_MAX, 'max'=> 2]],
            'passwordConfirm' => [self::RULE_REQUIRED, [self::RULE_MATCH, 'match' => 'password']],
        ];
    }

    public function attributes():array {
        return ['firstName','lastName','email','password'];
    }
}
