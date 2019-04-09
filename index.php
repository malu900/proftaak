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
          <h3> SOMNUS</h3>
          <p> The number one struggle of students is sleep deprivation. Thinking about this issue, we came up with a solution. Our product ‘Somnus’ will improve the sleep patterns of its users. Our device will track its users sleeping behavior and makes the statistics visible in the compatible application. With Somnus you’ll feel better!</p>
        </div>
        <div class="product-img col-10 col-md-5 col-lg-4 offset-md-1 offset-lg-1">
          <img src="img/mat-new.png" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>
  <div class="tips-header col-12 col-md-10  col-lg-5 offset-md-1 offset-lg-6">
    <div class="tips-header-center my-auto">
      <h5> Tips for a better night's rest </h5>
      <a href="#tips"> <i class="fas fa-angle-down"></i></a>
    </div>
  </div>
<?php include('tips.php'); ?>
</div>
<?php include('footer.php') ?>

<?php include("javascript_include.html"); ?>
</body>

</html>