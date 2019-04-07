<?php
/**
 * Created by PhpStorm.
 * User: maluv
 * Date: 3/10/2019
 * Time: 2:20 PM
 */
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <?php include("head.html"); ?>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Somnus</title>
</head>

<body>
  <div class="header">
    <div class="progress-container">
      <div class="progress-bar" id="myBar"></div>
    </div>
    <?php include('bars.html'); ?>
  </div>
  <div id="homepage" class="container-fluid main">
    <div class="row">
      <div class="container-fluid blue-header">
        <div class="row product h-100">
          <div class="product-text col-12 col-md-5 offset-md-6  offset-md-6 my-auto">
            <h3> PRODUCT TITLE </h3>
            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
              Nulla consequat massa quis enim.</p>
          </div>
          <div class="product-img col-8 col-md-4 offset-md-1">
            <embed src="logo.svg" />
          </div>
        </div>
      </div>
    </div>
    <div class="tips-container"> 
      
    </div>     

  </div>
  <?php include('footer.php') ?>

  <?php include("javascript_include.html"); ?>
</body>

</html>