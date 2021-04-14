$(document).ready(function(){

  $('.product__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 961,
        settings: 'unslick',
      }
    ],
  });

  $('.exemple__slider-items').slick({
    arrows:false,
    vertical: true,
    dots:true,
    slidesToScroll: 1,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive:[{
        breakpoint: 961,
        settings:{
          vertical: false,
        },
      },
    ],
  });

  $('.menu__btn').on('click', function(){
    $('.menu__btn').toggleClass('menu__btn--active');
  });

  $('.lazy').lazyload({
    effect : "fadeIn",
    effectTime: 1000,
    bind: "event"
  });

  const offsetTop = 400;

  $(document).ready(function () {
      const showAnchor = $(window).scrollTop() > offsetTop;
      handleVisibilityAnchor(showAnchor);
  })

  $(document).on('scroll', function () {
      const showAnchor = $(window).scrollTop() > offsetTop;
      handleVisibilityAnchor(showAnchor);
  })

  function handleVisibilityAnchor(show) {
    if (show) {
        $('.anchor').show();
    } else {
        $('.anchor').hide();
    }
  }

});









