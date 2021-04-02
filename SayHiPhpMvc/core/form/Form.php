<?php

namespace app\core\form;

use app\core\Model;

class Form
{
    public static function begin($action, $method)
    {
        echo sprintf('<form action="%s" method="%s">', $action, $method);
        return new Form();
    }
    public static function end()
    {
        return '</form';
    }
    public function field(Model $model, $attribute, $type)
    {
        return new Field($model, $attribute, $type);
    }
}
