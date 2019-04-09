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
            <p class="col-12 col-md-8">The idea of this project came to be while discussing sleep matters in the morning. Because most of us didn’t get enough sleep that night, we came up with the idea of doing something sleep related. We wanted to help ourselves and others sleep better at night. After a long session of brainstorming we finally got an idea. We developed a mat with built-in alarm and statistics sending capabilities. We present to you: ‘Somnus’.</p>
        </div>
        <div class="about-page-header">
            <h5> Our Team </h5>
            <p class="col-12 col-md-6"> Below you see the members of Somnus. These people worked very hard to create an outstanding product.. </p>
        </div>
        <?php include('team_cards.php'); ?>
    </div>
</div>
<?php include('footer.php') ?>
<?php include("javascript_include.html"); ?>
</body>

</html>