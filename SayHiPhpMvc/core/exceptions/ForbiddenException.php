<?php

namespace app\core\exceptions;

class ForbiddenException extends \Exception
{
    protected $code = 403;
    protected $message = 'You dont\'t have permission to access this page';
}
