/* 
   Sticky Nav
   ========================================================================== */

   window.onscroll = function() {myFunction()};
   var navbar = document.getElementById("nav-color");
   function myFunction() {
     if (window.pageYOffset >= 100) {
       navbar.classList.add("colored")
     } else {
       navbar.classList.remove("colored");
     }
   }

   (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Get the forms we want to add validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


/* 
   MixitUp
   ========================================================================== */
    $(function(){
      $('#portfolio').mixItUp();
    });

    $("#client-carousel").owlCarousel({
      pagination : false,
      center: true,
      loop:true,
      dots:false,
      margin:0,
      nav:false,
      autoplay:true,
      autoplayTimeout:2000,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:3
        },
        1000:{
          items:5
        }
      }
      });
      
/* 
   VIDEO POP-UP
   ========================================================================== */
    $('.video-popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });

/* 
   Back Top Link
   ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });
    $('.back-to-top').click(function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })

    

/* 
   One Page Navigation & wow js
   ========================================================================== */
  jQuery(function($) {
      //Initiat WOW JS
      new WOW().init();

      // one page navigation 
      $('.main-navigation').onePageNav({
              currentClass: 'active'
      });    
  });

  jQuery(document).ready(function() {
     
      $('body').scrollspy({
          target: '.navbar-collapse',
          offset: 195
      });

  });

  /* Nivo Lightbox
  ========================================================*/
  jQuery(document).ready(function( $ ) {    
    $('.lightbox').nivoLightbox({
     effect: 'fadeScale',
     keyboardNav: true,
   });

 });


   /* Testimonial Slider
  ========================================================*/

  $("#testimonial-slider").owlCarousel({      
    pagination : false,
    loop:true,
    //  dots:true,
    // margin:0,
     nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:3
      }
    }
    });


/* 
   Page Loader
   ========================================================================== */
  setTimeout(function(){
    $('#loader').fadeToggle();
  }, 50);