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
//= require jquery.validate
//= require additional-methods
//= require bootstrap-sprockets
//= require waypoints
//= require_tree .


$(document).ready(function() {

  // Menu items active
  $(".section-block").waypoint(function(direction) {
    var childindex = $(this).parent().index();

    $("ul.nav li").removeClass("active");
    if (direction == "up" && childindex > 0) {
      childindex = childindex - 1;
    }

    $targetitem = $("#navbar-collapse-1").find(":first-child").children().eq(childindex);
    $targetitem.addClass("active");
  }, {offset: "30%"});


  // Menu items auto scrolling
  $("a.navbar-item-link").click(function(event) {
    event.preventDefault();

    var childindex = $(event.target).parent().index();
    var $targetsection = $("#content-body").children().eq(childindex).find(":first-child");
    var targetposition = $targetsection.offset().top;


    if ($(window).width() < 768 && childindex != 0) {
      targetposition = targetposition - 50;
    }

    $('html, body').animate({
    scrollTop: targetposition
    }, 700);
  });

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


  // comment visibility
  $("#button-leave-message").on("click", function() {
    $("#add-comment-form").slideToggle('fast');
  });

  $("#button-cancel-message").on("click", function() {
    $("#add-comment-form").slideToggle('fast');
  });

  $("#button-review-message").on("click", function() {
    $("#comment-list-panel").slideToggle('fast');
  });

  if ( $("#comment-badge").text() === "0" ) {
      $("#button-review-message").hide();   
  }
  $("#alert-box").hide();
  $("#comment-list-panel").hide();
  $("#add-comment-form").hide();

  $( document ).ajaxComplete(function( event, xhr, settings ) {
    if ( $("#comment-badge").text() === "0" ) {
      $("#button-review-message").hide();
      $("#comment-list-panel").hide();
    } else {
      $("#button-review-message").show();
    }
  });


  $(".left-side").hide();
  $(".right-side").hide();



  $(".left-side").waypoint(function(direction) {
    if (direction == "up") {
      $(this).fadeOut({queue: false, duration: 'slow'});
      $(this).animate({marginLeft: "-=150px"}, 'slow');
    } else {
      $(this).fadeIn({queue: false, duration: 'slow'});
      $(this).animate({marginLeft: "+=150px"}, 'slow');
    }
  }, {offset:'65%'});



  $(".right-side").waypoint(function(direction) {
    if (direction == "up") {
      $(this).fadeOut({queue: false, duration: 'slow'});
      $(this).animate({marginRight: "-=150px"}, 'slow');
    } else {
      $(this).fadeIn({queue: false, duration: 'slow'});
      $(this).animate({marginRight: "+=150px"}, 'slow');
    }
  }, {offset:'65%'}, {triggerOnce: false});
});




