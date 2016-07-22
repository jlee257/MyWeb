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

  // jQuery("a").click(function(event){
  //   //check if it has a hash (i.e. if it's an anchor link)
  //   if(this.hash){
  //     var hash = this.hash.substr(1);
  //     var $toElement = jQuery("[id="+hash+"]");
  //     var toPosition = $toElement.position().top;
  //     //scroll to element
  //     $("body,html").animate({
  //       scrollTop : toPosition - 70
  //     } ,1000)
  //   }
  // });
  $("#a-menu-home").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("#home").offset().top
    }, 300);
  });

  $("#a-menu-section1").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("#section1").offset().top
    }, 300);
  });
});



