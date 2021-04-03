<?php
 /** @var $model \app\models\User */
?>


<div class="container text-center" style="margin-top: 50px;">
    <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72"
        height="72">
    <?php $form=app\core\form\Form::begin('login','post')?>
    <?php echo $form->field($model,'email','text') ?>
    <?php echo $form->field($model,'password','text')->passwordField() ?>
    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-muted">© 2021-2022</p>
    <?php echo app\core\form\Form::end() ?>
</div>