// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require bootstrap-sprockets
//= require waypoints
//= require_tree .


$(document).ready(function() {
  $("#section1").waypoint(function(direction) {
    if (direction == "up") {
      $("ul.nav li").removeClass("active");
      $("ul.nav li.menu-home").addClass("active");
    } else {
      $("ul.nav li").removeClass("active");
      $("ul.nav li.menu-section1").addClass("active");
    }
  }, {offset: "50%"});




  // Menu items auto scrolling
  $("a.navbar-item-link").click(function(event) {
    event.preventDefault();

    var childindex = $(event.target).parent().index();
    var $targetsection = $("#content-body").children().eq(childindex).children(":first");
    var targetposition = $targetsection.offset().top;


    if ($(window).width() < 768 && childindex != 0) {
      targetposition = targetposition - 50;
    }

    $('html, body').animate({
    scrollTop: targetposition
    }, 500);


    // if (childindex == 0) {
    //   $('html, body').animate({
    //   scrollTop: $targetsection.offset().top
    //   }, 500);
    // } else {
    //   $('html, body').animate({
    //   scrollTop: $targetsection.offset().top - offadjust()
    //   }, 500);
    // }
  });

  // offadjust = function() {
  //   if ($(window).width() < 768) {
  //     return 50;
  //   } else {
  //     return 0;
  //   }
  // };




  // Bootstrap Navbar fade-in/fad-out
  $(".navbar").hide();
  
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > $(window).height()/2) {
        $('.navbar').fadeIn();
      } else {
        $('.navbar').fadeOut();
      }
    });
  });


 

});



