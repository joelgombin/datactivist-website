'use strict';

$(function() {
  $('.slides').slick({
    autoplay: false,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    dots: true,
    appendDots: $('.dots'),
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false
  });

  $('.block_actu article').click(function(){
    $('.block_actu article').removeClass('active')
    $(this).addClass('active')
  })
})