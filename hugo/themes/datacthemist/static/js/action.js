'use strict';

$(function() {
  $('.js_slider').lory({
      infinite: 2,
      slidesToScroll: 2
  });

  $('.block_actu article').click(function(){
    $('.block_actu article').removeClass('active')
    $(this).addClass('active')
  })
})