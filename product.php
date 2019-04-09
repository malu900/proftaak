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
            <h5> choose your plan </h5>
            <p class="col-12 col-md-6"> Since people in different age groups have different sleeping behaviours, it’s only fitting to offer our product for each of these age groups. Our plan for kids is available for children ranging from ages 4-18. Secondly, we offer a plan for adults. This plan is available for people ranging from ages 18-65. Lastly, we offer a plan for the elderly. This plan will cover all people surpassing 65 years old. </p>
        </div>
        <?php include('product_cards.php'); ?>
        <div class="product-page-plan-header">
            <h5>Our Features</h5>
            <p class="col-12 col-md-6">Below we’ll explain the basic and extra features of our product. </p>
        </div>
        <?php include('feature_cards.php'); ?>
    </div>
</div>
<?php include('footer.php') ?>
<?php include("javascript_include.html"); ?>
</body>

</html>