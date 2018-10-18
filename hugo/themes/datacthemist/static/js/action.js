'use strict';

$(function() {

  $('body').addClass('borders');

  $('.slides').slick({
    autoplay: false,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    dots: true,
    appendDots: $('.dots'),
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });

  $('.block_actu article').click(function(){
    if ($(this).hasClass('active')){
      $('.block_actu article').removeClass('active')
    } else {
      $('.block_actu article').removeClass('active')
      $(this).addClass('active')
    }    
  })
})

/**!
Navigation Button Toggle class
*/
(function() {

// old browser or not ?
if ( !('querySelector' in document && 'addEventListener' in window) ) {
  return;
}
window.document.documentElement.className += ' js-enabled';

function toggleNav() {

// Define targets by their class or id
var button = document.querySelector('.nav-button');
var target = document.querySelector('.main');

// click-touch event
if ( button ) {
  button.addEventListener('click',
    function (e) {
      button.classList.toggle('is-active');
      target.classList.toggle('is-opened');
      e.preventDefault();
    }, false );
}
} // end toggleNav()

toggleNav();
}());