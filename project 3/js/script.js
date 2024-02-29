

$('.slider-item').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<i class="fa-solid fa-chevron-left prev_arr"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right next_arr"></i>',
    dots: true
  });

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

$('.text-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:'<i class="fa-solid fa-arrow-left text-prev"></i>',
  nextArrow:'<i class="fa-solid fa-arrow-right text-next"></i>',
  dots:true,
});