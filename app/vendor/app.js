/*
*   tremendoLive Plugin
*   Author: Emanuel Dobao, www.tremendo.agency
*   Copyright (c) 2020  tremendo agency.
*   Licensed under the MIT license:
*   http://www.opensource.org/licenses/mit-license.php
*
*/

'use strict';

(function($) {
  var data = window.APP_DATA;

  //Create Viewer
  $.fn.tlive = function(options) {
    var viewer = $('<div class="tl-viewer"></div>').appendTo('body');
    var container = $('<div class="tl-container"></div>').appendTo(viewer);
    var wrapper = $('<div class="tl-wrapper"></div>').appendTo(container);

    // Create Stages
    if(data.event.settings.stages){
      var stages = data.event.stages;
      $.each(stages, function(index, stage) {
        $('<div class="tl-stage tl-slide"><a href="' + stage.name +'">' + stage.name + '</a></div>').appendTo(wrapper);
      });
    }
    
    // Create Food & Drinks
    if(data.event.settings.food_and_drinks){
      var foodNDrinks = $('<div class="tl-food-n-drinks tl-slide"></div>').appendTo(wrapper);
      var stands = data.event.stands;
      $.each(stands, function(index, stand) {
        $('<div class="tl-stand"><a href="' + stand.link +'">' + stand.name + '</a></div>').appendTo(foodNDrinks);
      });
    }
    // Create Photobooth
    if(data.event.settings.photobooth){
       var photobooth = $('<div class="tl-photobooth tl-slide"></div>').appendTo(wrapper);
    }
    // Create Insta Feed
    if(data.event.settings.insta_feed){
      var instaFeed = $('<div class="tl-insta-feed tl-slide"></div>').appendTo(wrapper);
    }
    // Create Donations
    if(data.event.settings.donate){
      var donate = $('<div class="tl-donate tl-slide"></div>').appendTo(wrapper);
    }
    // Create Navbar
    if(data.event.settings.navbar){
      var navbar = $('<div class="tl-navbar tl-slide"></div>').appendTo(wrapper);
    }    

    //Initialize Swiper
    var live = new Swiper('.tl-viewer .tl-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      containerModifierClass: 'tl-container-',
      slideClass: 'tl-slide',
      slideActiveClass: 'tl-slide-active',
      slideDuplicateActiveClass: 'tl-slide-duplicate-active',
      slideVisibleClass: 'tl-slide-visible',
      slideDuplicateClass: 'tl-slide-duplicate',
      slideNextClass: 'tl-slide-next',
      slideDuplicateNextClass: 'tl-slide-duplicate-next',
      slidePrevClass: 'tl-slide-prev',
      slideDuplicatePrevClass: 'tl-slide-duplicate-prev',
      wrapperClass: 'tl-wrapper',
      coverflowEffect: {
        rotate: 70,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.tl-pagination',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false
      }
    });
  };


})(jQuery); // End of use strict

$(document).ready(function(){
  $(window).tlive();
});