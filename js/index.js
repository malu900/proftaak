// jQuery & w3schools & jQuery UI & Javascript  documentation
// // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_indicator
window.onscroll = function () { myFunction() };

function myFunction() {
  var elDiv = document.getElementById("tips");
  var winScroll =  document.documentElement.scrollTop - elDiv.offsetTop;
  var height = document.getElementById("tips").scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


$(document).scroll(function () {
  ScrollIndicatorVisibility();
  AnimateLeftTips();
  AnimateRightTips();
});

$(document).ready(function ($) {

  NavigationHover();
  NavigationToggle();
  CheckIfPresent();
  ContactIconsHover();
  MapBox();
  FooterHeight();
  BounceIcon();

  $('.progress-container').css({
    'visibility': 'hidden'
  });;

});


function CheckIfPresent() {
  if ($("#homepage").length > 0) {
    $('.hamburger div').css({ 'background-color': 'white' });
    $('html').addClass('hide-scrollbar');
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


function NavigationHover() {
  $ul = $('.nav-content-center ul');
$li = $('.nav-content-center ul li');
$firstli = $('.nav-content-center ul .first-li-item');
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

function BounceIcon(){
  $headerIcon = $('.tips-header i');
    setInterval(function(){
      $($headerIcon).effect("bounce", {times: 4}, 500)
    }, 5000);  
}
//https://www.w3schools.com/graphics/google_maps_intro.asp
function MapBox() {
  mapboxgl.accessToken = 'pk.eyJ1IjoibWFsdTkwMCIsImEiOiJjanR5amZtdTEwaTMzNDNtaGpmdmkzMmhnIn0.-PicZ5332e2dxzGoPtTjog';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [5.4820865, 51.4522206],
    zoom: 12
  });
}

function FooterHeight(){
  $(window).resize(function() {
    $('footer').css({'height': $('footer').height()});
  });
  $(window).resize();
}


function AnimateLeftTips(){
  $('.tips-container-animation-left').each( function(){
      
    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    
    if( bottom_of_window > bottom_of_element ){
      $(this).animate({'opacity':'1','margin-left':'0' },2000);
    }
    
}); 
}

function AnimateRightTips(){
  $('.tips-container-animation-right').each( function(){
      
    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    
    if( bottom_of_window > bottom_of_element ){
      $(this).animate({'opacity':'1','margin-left':'0' },2000);
    }
    
}); 
}

function ScrollIndicatorVisibility(){
  var documentHeight = $(this).scrollTop();
  var elementHeight = $('#tips').offset().top;
  var distance = (elementHeight - documentHeight)
  if (documentHeight > distance ) {
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
}