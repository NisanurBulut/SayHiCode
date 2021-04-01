<!DOCTYPE html>
<html lang="en">
<head>
     <!-- Bootstrap CSS -->
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <link rel="stylesheet" href="/css/bootstrap.css">
    <title><?php echo $this->title ?></title>
</head>
<body>
<div class="ui inverted purple menu">
  <div class="header item">Brand</div>
  <div class="active item">Link</div>
  <a class="item">Link</a>
  <div class="ui dropdown item" tabindex="0">
    Dropdown
    <i class="dropdown icon"></i>
    <div class="menu" tabindex="-1">
      <div class="item">Action</div>
      <div class="item">Another Action</div>
      <div class="item">Something else here</div>
      <div class="divider"></div>
      <div class="item">Separated Link</div>
      <div class="divider"></div>
      <div class="item">One more separated link</div>
    </div>
  </div>
  <div class="right menu">
    <div class="item">
      <div class="ui transparent inverted icon input">
        <i class="search icon"></i>
        <input type="text" placeholder="Search">
      </div>
    </div>
    <a class="item">Link</a>
  </div>
</div>
{{ content }}
</body>
<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
        integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
        crossorigin="anonymous"></script>
</html>