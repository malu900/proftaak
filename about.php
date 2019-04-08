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
<div id="about-page" class="container-fluid main">
    <div class="container about-page">
        <div class="about-page-header">
            <h5> Philosophy </h5>
            <p class="col-12 col-md-8"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. </p>
        </div>
        <div class="about-page-header">
            <h5> Our Team </h5>
            <p class="col-12 col-md-6"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. </p>
        </div>
        <?php include('team_cards.php'); ?>
    </div>
</div>
<?php include('footer.php') ?>
<?php include("javascript_include.html"); ?>
</body>

</html>