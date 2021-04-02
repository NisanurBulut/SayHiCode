<?php

namespace app\models;

use app\core\Model;

class RegisterModel extends Model
{
    public string $firstName ='';
    public string $lastName='';
    public string $email='';
    public string $password='';
    public string $passwordConfirm='';

    public function register()
    {
        echo 'register user';
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
}
