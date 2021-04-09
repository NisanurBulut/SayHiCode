<?php $this->title = 'Home' ?>

<div class="container">
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Surname</th>
      <th scope="col">Email Address</th>
    </tr>
  </thead>
  <tbody>
  <?php
  foreach($users as $user) {
      echo sprintf('<tr>
      <th scope="row"></th>
      <td>%s</td>
      <td>%s</td>
      <td>%s</td>
    </tr>', $user->firstname, $user->lastname,$user->email);
  }?>


  </tbody>
</table></div>