<?php

namespace app\core\exceptions;

class NotFoundException extends \Exception
{
    protected $code = 404;
    protected $message = 'Page Not Found';
}
