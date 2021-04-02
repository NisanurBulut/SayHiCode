<?php $form=app\core\form\Form::begin('',"post")?>
<div class="row">
    <div class="col">
        <?php echo $form->field($model, 'firstName','text') ?>
    </div>
    <div class="col">
        <?php echo $form->field($model, 'lastName','text') ?>
    </div>
</div>
<?php echo $form->field($model,'email','text') ?>
<?php echo $form->field($model,'password','text')->passwordField() ?>
<?php echo $form->field($model,'confirmPassword','text')->passwordField() ?>
<?php app\core\form\Form::end() ?>