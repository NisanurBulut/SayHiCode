<?php

namespace app\models;

use app\core\UserModel;

class User extends UserModel
{
    const STATUS_INACTIVE = 0;
    const STATUS_ACTIVE = 1;
    const STATUS_DELETED = 2;

    public string $firstname = '';
    public string $lastname = '';
    public string $email = '';
    public string $password = '';
    public string $passwordConfirm = '';
    public int $status = self::STATUS_ACTIVE;

    public function primaryKey(): string
    {
        return 'id';
    }
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
            'firstname' => [self::RULE_REQUIRED],
            'lastname' => [self::RULE_REQUIRED],
            'email' => [self::RULE_REQUIRED, [self::RULE_UNIQUE, 'class' => self::class]],
            'password' => [self::RULE_REQUIRED, [self::RULE_MIN, 'min' => 1], [self::RULE_MAX, 'max' => 2]],
            'passwordConfirm' => [self::RULE_REQUIRED, [self::RULE_MATCH, 'match' => 'password']],
        ];
    }
    public function labels(): array
    {
        return ['firstname'=>'First Name',
                'lastname'=>'Last Name',
                'email'=>'Email Address',
                'password'=>'Password',
                'passwordConfirm'=>'Confirm Password'];
    }
    public function attributes(): array
    {
        return ['firstname', 'lastname', 'email', 'password', 'status'];
    }
    public function getDisplayName():string {
        return $this->firstname.' '.$this->lastname;
    }
}
