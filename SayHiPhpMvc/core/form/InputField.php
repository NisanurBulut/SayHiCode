<?php

namespace app\core\form;

use app\core\form;
use app\core\Model;
use app\core\form\BaseField;

class InputField extends BaseField
{
    public Model $model;
    public string $attribute;
    public string $type;

    public const TYPE_PASSWORD = 'password';
    public const TYPE_TEX = 'text';
    public const TYPE_NUMBER = 'number';
    public function __construct(Model $model, string $attribute, string $type)
    {
        parent::__construct($model, $attribute);
        $this->type = $type;
    }
    public function renderInput(): string
    {
        return sprintf(
            '<input id="inputFor" type="%s" name="%s" value="%s" class="form-control%s" />',
            $this->type,
            $this->attribute,
            $this->model->{$this->attribute},
            $this->model->hasError($this->attribute) ? ' is-invalid ' : ''
        );
    }


    public function passwordField()
    {
        $this->type = self::TYPE_PASSWORD;
        return $this;
    }
}
