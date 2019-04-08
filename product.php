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
    <?php include('bars.html'); ?>
</div>
<div id="product-page" class="container-fluid main">
    <div class="container product-page-plan">
        <div class="product-page-plan-header">
            <h5> choose you're plan </h5>
            <p class="col-12 col-md-6"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. </p>
        </div>
        <?php include('product_cards.php'); ?>
        <div class="product-page-plan-header">
            <h5>Our Features</h5>
            <p class="col-12 col-md-6"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. </p>
        </div>
        <?php include('feature_cards.php'); ?>
    </div>
</div>
<?php include('footer.php') ?>
<?php include("javascript_include.html"); ?>
</body>

</html>