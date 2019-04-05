// // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_indicator
window.onscroll = function() {myFunction()};

function myFunction() {
  var elDiv = document.getElementById("tips");
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop  - elDiv.offsetTop;
  var height = document.getElementById("tips").scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";  
}

$(document).scroll(function() {
  var documentHeight = $(this).scrollTop();
  var elementHeight = $('#tips').offset().top;
  var distance = (elementHeight - documentHeight)
  if (documentHeight > distance + 50) {
    $('.progress-container').css({
      'visibility' : 'visible',
      'opacity' : '1',
      'transition' : 'visibility 0s linear 300ms, opacity 300ms'
   });
  } else {
    $('.progress-container').css({
      'visibility': 'hidden',
      'opactiy' : 0,
      'transition' : 'visibility 0s linear 300ms, opacity 300ms'
    });
  }
});


$(document).ready(function ($) {
  $('.progress-container').css({
    'visibility' : 'hidden'
 });;

  // navigation  toggle
  $(".nav-content").hide();

  $('#nav-bars').click(function () {
    $(".nav-content").toggle('slide', { direction: 'left' });
  });

  $('.closing-icon').click(function () {
    $(".nav-content").toggle('slide', { direction: 'right' });
  });
});


