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
	<?php include( "head.html" ); ?>
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
<div class="container-fluid main"> 
  <div class="viewHeight"> </div>
  <p id="demo"></p>
  <?php include('tips.php'); ?>

</div> 

<?php include( "javascript_include.html" ); ?>
</body>
</html>