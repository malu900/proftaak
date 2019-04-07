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
  ContactIconsHover();
  // ZoomButtonHover();

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

$ul = $('.nav-content-center ul');
$li = $('.nav-content-center ul li');
$firstli = $('.nav-content-center ul .first-li-item');

function NavigationHover() {
  //remove before element 
  //https://stackoverflow.com/questions/27270021/remove-content-from-before-element-css
  document.styleSheets[0].addRule('.first-li-item:before', 'display: none !important;');

  //hover media query breakpoints 
  $(window).resize(function () {
    if ($(window).width() >= 1024.99) {
      $($li).not($firstli).hide();
      $($firstli).on({
        mouseenter: function (e) {
          $(this).siblings().fadeIn(500);
          e.StopPropagnation();
        },
      })
      $($firstli).on({
        mouseleave: function (e) {
          $(this).siblings().fadeOut(100);
          e.StopPropagnation();
        },
      })
    }
    if (($(window).width() > 767.99) && ($(window).width() < 1024.98)) {
      $($li).show();
    }
    if ($(window).width() < 767.98) {
      $($li).hide();
      $($firstli).show();
    }
  });

  $(window).resize();
}

function ContactIconsHover() {
  $icons = $('.nav-content-footer-links a');

  $($icons).on({
    mouseenter: function (e) {
      $(this).effect("bounce", { times: 1 }, 500);
    }
  })
}

// function ZoomButtonHover() {
//   $button = $('nav-content-footer-button');
//   $($button).hover(function() {
//     $(this).css("cursor", "pointer");
//     $(this).toggle({
//       effect: "scale",
//       percent: "90%"
//     },200);
// }, function() {
//      $(this).toggle({
//        effect: "scale",
//        percent: "80%"
//      },200);

// });
// }
