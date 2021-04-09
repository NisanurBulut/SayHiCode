<?php

namespace app\core\form;

use app\core\Model;

abstract class BaseField
{
    public Model $model;
    public string $attribute;
    abstract public function renderInput(): string;
    public function __construct(Model $model, string $attribute)
    {
        $this->model = $model;
        $this->attribute = $attribute;
    }
    public function __toString()
    {
        return sprintf('<div class="form-group">
        <label for="inputFor">%s</label>
                %s
        <small  class="text-danger"> %s </small>
        </div>',
            $this->model->getLabel($this->attribute),
            $this->renderInput(),
            $this->model->getFirstError($this->attribute)
        );
    }
}
