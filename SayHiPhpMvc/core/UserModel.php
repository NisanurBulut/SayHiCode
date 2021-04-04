<?php
namespace app\core;

use app\core\db\DbModel;

abstract class UserModel extends DbModel{
    abstract public function getDisplayName():string;
}
