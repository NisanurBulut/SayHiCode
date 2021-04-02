<?php

namespace app\models;

use app\core\DbModel;

class User extends DbModel
{
    const STATUS_INACTIVE = 0;
    const STATUS_ACTIVE = 1;
    const STATUS_DELETED = 2;

    public string $firstName = '';
    public string $lastName = '';
    public string $email = '';
    public string $password = '';
    public string $passwordConfirm = '';
    public int $status = self::STATUS_ACTIVE;

    public function tableName(): string
    {
        return 'users';
    }
    public function select()
    {
        return parent::select();
    }
    public function save()
    {
        $this->password =  password_hash($this->password, PASSWORD_DEFAULT);
        return parent::save();
    }
    public function rules(): array
    {
        return [
            'firstName' => [self::RULE_REQUIRED],
            'lastName' => [self::RULE_REQUIRED],
            'email' => [self::RULE_REQUIRED, [self::RULE_UNIQUE, 'class'=>self::class]],
            'password' => [self::RULE_REQUIRED, [self::RULE_MIN, 'min' => 1], [self::RULE_MAX, 'max' => 2]],
            'passwordConfirm' => [self::RULE_REQUIRED, [self::RULE_MATCH, 'match' => 'password']],
        ];
    }

    public function attributes(): array
    {
        return ['firstName', 'lastName', 'email', 'password', 'status'];
    }
}
