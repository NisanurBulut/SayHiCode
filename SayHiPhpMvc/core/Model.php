<?php

namespace app\core;

abstract class Model
{
    public array $errors = [];
    public const RULE_REQUIRED = 'required';
    public const RULE_MIN = 'min';
    public const RULE_MAX = 'max';
    public const RULE_MATCH = 'match';
    public const RULE_EMAIL = 'email';

    public function loadData($data)
    {
        foreach ($data as $key => $value) {
            if (property_exists($this, $key)) {
                $this->{$key} = $value;
            }
        }
    }

    abstract public function rules(): array;
    public function validate()
    {
        foreach($this->rules as $attribute => $rules){
            $value = $this->{$attribute};
            foreach($rules as $rule){
                $ruleName = $rule;
                if(!is_string($ruleName)){
                    $ruleName=$rule[0];
                }
                if($ruleName === self::RULE_REQUIRED && !$value) {
                    $this->addError($attribute, self::RULE_REQUIRED);
                }
            }
        }
    }
    public function addError(string $attribute, string $rule) {
        $message = $this->errorMessage()[$rule]??'';
        $this->errors[$attribute][]=$message;
    }
    public function errorMessages(){

        return [
            self::RULE_REQUIRED => 'This field is required',
            self::RULE_EMAIL=>'This field must be valid email address',
            self::RULE_MATCH=>'This field must be the same as {match}',
            self::RULE_MIN=>'Min length of this field must be {min}',
            self::RULE_MAX=>'Max length of this field must be {max}']
    }
}