<?php

?>


<div class="page-wrap d-flex flex-row align-items-center" style=" min-height: 100vh;">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 text-center">
                <span class="display-1 d-block"><?php echo $exception->getCode() ?></span>
                <div class="mb-4 lead"><?php echo $exception->getMessage() ?></div>
                <a href="/" class="btn btn-link">Back to Home</a>
            </div>
        </div>
    </div>
</div>
