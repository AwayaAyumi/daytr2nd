//slick
$(function(){
  $('.main-slider').slick({
    autoplay:true,
    autoplaySpeed: 4000,
    accessibility: true,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });
});

//wow
$(function(){
  new WOW().init();
});

//drower
$(function () {
  $('.navbar_toggle').on('click', function () {
    $(this).toggleClass('open');
    $('.menu').toggleClass('open');
    $('.menu').toggleClass('black');
  });
});

//scrollTop
$(function(){
  $('header a').click(function(){
    var id = $(this).attr('href');
    var headerHeight = 100;
    var position = $(id).offset().top - headerHeight;
    $('html, body').animate({
      'scrollTop':position
    }, 750);
  });
  $('.btn-wrap a').click(function(){
    var id = $(this).attr('href');
    var headerHeight = 100;
    var position = $(id).offset().top - headerHeight;
    $('html, body').animate({
      'scrollTop':position
    }, 750);
  });
  $('footer a').click(function(){
    var id = $(this).attr('href');
    var headerHeight = 100;
    var position = $(id).offset().top - headerHeight;
    $('html, body').animate({
      'scrollTop':position
    }, 750);
  });
});


//to-top
$(function(){
  jQuery(window).on("scroll", function ($) {
    if (jQuery(this).scrollTop() > 100) {
      jQuery('.to-top').addClass('effect-scroll');
    } else {
      jQuery('.to-top').removeClass('effect-scroll');
    }
  });
  jQuery('.to-top').click(function () {
    jQuery('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});

//nav
$(function(){
  $('.nav-link').click(function(){
    $('.nav-link').removeClass('nav-border');
  });
  $('.nav-link').on('click',function(){
    $(this).addClass('nav-border');
  });
});

//accordion
$(function(){
  $('.accordion-item').on('click', function(){
    var $open = $(this).find('.accordion-item-A');
    var $btn =  $(this).find('.acd-btn');
    $open.slideToggle();
    if ($open.hasClass('accordion-active')){
      $open.removeClass('accordion-active');
      $btn.html('<img src="img/plus.svg">');
    } else {
      $open.addClass('accordion-active');
      $btn.html('<img src="img/minus.svg">');
    }
  });
});

//description
$(function(){
  $('.desc-item').on('click', function(){
    var $active = $(this).find('.desc-text');
    var $btn = $(this).find('.desc-btn');
    $active.slideToggle();
    if ($active.hasClass('desc-active')){
      $active.removeClass('desc-active');
      $btn.html('<img src="img/arrow-bottom.svg">');
    } else {
      $active.addClass('desc-active');
      $btn.html('<img src="img/arrow-top.svg">');
    }
  });
});

//modal
$(function(){
  //open
  $('#showModal').on('click', function(){
    $('#privacy').fadeIn();
  });
  //close
  $('.modal-close').on('click', function(){
    $('#privacy').fadeOut();
  });

});
