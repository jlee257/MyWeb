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

    $('html, body').animate({
    scrollTop: targetposition
    }, 300);
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

  $( document ).ajaxComplete(function( event, xhr, settings) {
    if ( $("#comment-badge").text() === "0" ) {
      $("#button-review-message").hide();
      $("#comment-list-panel").hide();
    } else {
      $("#button-review-message").show();
    }
  });



  // About me page
  $("#course-list").hide();
  $("#link-show-course").click(function(event) {
    event.preventDefault();
    var link = $(this);
    $("#course-list").slideToggle('fast', function() {
      if ($(this).is(':visible')) {
        link.html('<h6>Hide list of completed courses <span class="glyphicon glyphicon glyphicon-chevron-up" aria-hidden="true"></h6>');                
      } else {
        link.html('<h6>Show list of completed courses <span class="glyphicon glyphicon glyphicon-chevron-down" aria-hidden="true"></h6>');                
      }        
    });
  });


  // Section element animations
  $(".left-side").css({marginLeft : "-=150px", marginRight: "+=150px", opacity: 0});
  $(".right-side").css({marginRight : "-=150px", marginLeft: "+=150px", opacity: 0});
  $(".hr-long").css({width: "5vh"});


  $(".left-side").waypoint(function(direction) {
    if (direction == "up") {
      // $(this).fadeOut({queue: false, duration: 'fast'});
      $(this).animate({marginLeft : "-=150px", marginRight: "+=150px", opacity: 0}, 'fast');
    } else {
      // $(this).fadeIn({queue: false, duration: 'fast'});
      $(this).animate({marginRight : "-=150px", marginLeft: "+=150px", opacity: 1}, 'fast');
    }
  }, {offset:'75%'});

  $(".right-side").waypoint(function(direction) {
    if (direction == "up") {
      // $(this).fadeOut({queue: false, duration: 'fast'});
      $(this).animate({marginRight : "-=150px", marginLeft: "+=150px", opacity: 0}, 'fast');
    } else {
      // $(this).fadeIn({queue: false, duration: 'fast'});
      $(this).animate({marginLeft : "-=150px", marginRight: "+=150px", opacity: 1}, 'fast');
    }
  }, {offset:'75%'}, {triggerOnce: false});

  $(".hr-long").waypoint(function(direction) {
    if (direction == "up") {
      $(this).animate({width: "5vh"}, 'medium');
    } else {
      $(this).animate({width: "60vh"}, 'medium');
    }
  }, {offset:'75%'}, {triggerOnce: true});





  // First page slider animations
  $(".slider-element-description").hide();

  $(".slider-element-container-first").hover(function() {
    $(this).animate({width: "50%"}, {queue: false, duration: 'fast'});
    $(".slider-element-container").not(".slider-element-container-last").animate({width: "10%"}, {queue: false, duration: 'fast'});
    $(".slider-element-description").hide();
    // $(".slider-element-description").fadeOut({queue: false, duration: 'fast'});
  });

  $(".slider-element-container").hover(function() {
    $(".slider-element-container-first").animate({width: "30%"}, {queue: false, duration: 'fast'});
    $(this).not(".slider-element-container-last").animate({width: "30%"}, {queue: false, duration: 'fast'});
    $(".slider-element-container").not(this).not(".slider-element-container-last").animate({width: "10%"}, {queue: false, duration: 'fast'});
    
    // $(".slider-element-container").not(this).find(".slider-element-description").fadeOut({queue: false, duration: 'fast'});
    $(".slider-element-container").not(this).find(".slider-element-description").hide();
    $(this).find(".slider-element-description").fadeIn({queue: false, duration: 'fast'});
  });

  $(".slider-element-container").click(function() {
    var childindex = $(this).index();
    var $targetsection = $("#content-body").children().eq(childindex).find(":first-child");
    var targetposition = $targetsection.offset().top;


    if ($(window).width() < 768 && childindex != 0) {
      targetposition = targetposition - 50;
    }

    $('html, body').animate({
    scrollTop: targetposition
    }, 300);
  });
});




