$(document).ready(function(){

// slick slider
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '.leftarrow',
        nextArrow: '.rightarrow',
        centerMode: true,
        centerPadding: '0px',
        dots: true,
        dotsClass: "bannerDots",
        
    });

  });