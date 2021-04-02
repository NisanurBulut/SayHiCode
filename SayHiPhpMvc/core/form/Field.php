<?php

namespace app\core\form;

use app\core\form;
use app\core\Model;

class Field
{
    public Model $model;
    public string $attribute;
    public string $type;

    public const TYPE_PASSWORD = 'password';
    public const TYPE_TEX = 'text';
    public const TYPE_NUMBER = 'number';
    public function __construct(Model $model, string $attribute, string $type)
    {
        $this->model = $model;
        $this->attribute = $attribute;
        $this->type = $type;
    }

    public function __toString()
    {
        return sprintf(
            '
     <div class="form-group">
     <label for="inputFor">%s</label>
     <input id="inputFor" type="%s" name="%s" value="%s" class="form-control %s"
     <div class="invalid-feedback">
     %s
     </div>
     </div>
     ',
            $this->attribute,
            $this->type,
            $this->attribute,
            $this->model->hasError($this->attribute),
            $this->model->hasError($this->attribute) ? '' : 'is-invalid',
            $this->model->getFirstError($this->attribute)
        );
    }

    public function passwordField()
    {
        $this->type = self::TYPE_PASSWORD;
        return $this;
    }
}
