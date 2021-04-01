<?php

namespace app\core\form;

use app\core\Model;

class Form
{
    public function begin($action, $method)
    {
        return '<form action="$action" method="$method">';
    }
    public function end()
    {
        return '</form';
    }
    public function field(Model $model, $attribute){
        return new Field($model, $attribute);
    }
}
