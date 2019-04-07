// // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_indicator
window.onscroll = function () { myFunction() };

function myFunction() {
  var elDiv = document.getElementById("tips");
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop - elDiv.offsetTop;
  var height = document.getElementById("tips").scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

$(document).scroll(function () {
  var documentHeight = $(this).scrollTop();
  var elementHeight = $('#tips').offset().top;
  var distance = (elementHeight - documentHeight)
  if (documentHeight > distance + 50) {
    $('.progress-container').css({
      'visibility': 'visible',
      'opacity': '1',
      'transition': 'visibility 0s linear 300ms, opacity 300ms'
    });
  } else {
    $('.progress-container').css({
      'visibility': 'hidden',
      'opactiy': 0,
      'transition': 'visibility 0s linear 300ms, opacity 300ms'
    });
  }
});


$(document).ready(function ($) {

  NavigationHover();
  NavigationToggle();
  CheckIfPresent();

  $('.progress-container').css({
    'visibility': 'hidden'
  });;

});

function CheckIfPresent() {
  if ($("#homepage").length > 0) {
    $('.hamburger div').css({ 'background-color': 'white' });
  }
}

function NavigationToggle() {
  $(".nav-content").hide();

  $('#nav-bars').click(function () {
    $(".nav-content").toggle('slide', { direction: 'left' });
  });

  $('.closing-icon').click(function () {
    $(".nav-content").toggle('slide', { direction: 'right' });
  });
}


var $li = $('.nav-content-center ul li');
var $firstli = $('.nav-content-center ul .first-li-item');

function NavigationHover() {
  //remove before element 
  //https://stackoverflow.com/questions/27270021/remove-content-from-before-element-css
  document.styleSheets[0].addRule('.first-li-item:before', 'display: none !important;');

  // hover media query breakpoints 
  if ($(window).width() >= 767.99) {

    $($firstli, $li).mouseenter(function () {
      $($li).fadeIn(500);
    });
    $($firstli, $li).mouseleave(function () {
      $($li).not($firstli).fadeOut(100);
    });
  } else if (($(window).width() >= 767.99) && ($(window).width() <= 1024)) {
    $($li).show();
  } else if ($(window).width() <= 767.98) {
    $($li).hide();
    $($firstli).show();
  }
}


