<?php

namespace app\core\form;

use app\core\form;
use app\core\Model;
use app\core\form\BaseField;

class TextareaField extends BaseField
{

    public function renderInput(): string
    {
        return sprintf(
            '<textarea name="%s" value="%s" class="form-control%s"></textarea>',
            $this->attribute,
            $this->model->{$this->attribute},
            $this->model->hasError($this->attribute) ? ' is-invalid ' : ''
        );
    }
}
