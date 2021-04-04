<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo $this->title ?></title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
</head>

<body>
  <div class="container">
    <?php

    use app\core\Application;

    if (Application::$app->session->getFlash('success')) : ?>
      <div class="alert alert-success">
        <?php echo Application::$app->session->getFlash('success'); ?></div>
    <?php endif; ?>
  </div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mr-auto">
    <a class="navbar-brand" href="#">Say Hi PHP MVC</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" style="float:right;">
      <ul class="navbar-nav mr-auto">
      </ul>
      </ul>
      <ul class="navbar-nav">
      <?php if(!Application::isGuest()): ?>
        <li class="nav-item">
          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/profile" tabindex="-1">profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/logout" tabindex="-1">
            Logout
          </a>
        </li>
        <?php else: ?>
        <li class="nav-item">
          <a class="nav-link" href="/register" tabindex="-1">register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login" tabindex="-1">login</a>
        </li>
        <?php endif ?>
      </ul>
    </div>
  </nav>
  <div class="container">
    {{ content }}
  </div>
</body>
<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>

</html>