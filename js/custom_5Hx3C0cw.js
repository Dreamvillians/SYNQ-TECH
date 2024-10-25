/* TYPES OF OUR CARDS (#3) */

$(function(){
  $(document).ready(function(){
    window.slick123Left = $('.slider-123-left').each(function(){
      var _this = $(this);
      _this.slick({ 
        asNavFor: '.slider-123-right',
        dots: false,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        infinite: true,
        speed: 300,
        touchThreshold: 1/0,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              vertical: false,
              verticalSwiping: false,
              centerPadding:'20%',
            }
          },
        ],
      });
      var currentImg = _this.find(".slick-current img").get(0);
      if (currentImg.complete) {
        setSlick123LeftPadding(_this);
      } else {
        currentImg.addEventListener('load', function(){setSlick123LeftPadding(_this);});
      }
    });
    $(window).resize(function(){
      setSlick123LeftPadding(window.slick123Left);
    });
    function setSlick123LeftPadding(slider){
      if($(window).width()>766){
        var height = slider.find(".slick-current").outerHeight(true);
        slider.slick("slickSetOption",{centerPadding:'calc((100vh - '+height+'px) / 2)'}, true);
      }
    }
    window.slick123Right = $('.slider-123-right').each(function(){
      $(this).slick({ 
        asNavFor: '.slider-123-left',
        dots: false,
        arrows: true,
        vertical: true,
        verticalSwiping: true,
        prevArrow: $(this).prev(".slick-prev"),
        nextArrow: $(this).next(".slick-next"),
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 300,
        slidesToShow: 1, 
        slidesToScroll: 1,
        touchThreshold: 1/0,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              vertical: false,
              verticalSwiping: false,
            }
          },
        ],
      });
    });   
  });
});

/* OUR CLIENTS (#6) */

$(function(){
  var slideKey = 175;
  if(!window.swipers){window.swipers = {};}
  if(!window.swipers[slideKey]){window.swipers[slideKey] = [];}
  $('.swiper-'+slideKey).each(function(){
    var thisKey = window.swipers[slideKey].length;
    window.swipers[slideKey][thisKey] = 
      new Swiper(this, {
      slidesPerView: 1, 
      spaceBetween: 20, 
      navigation: {
        nextEl: '.swiper-175-next',
        prevEl: '.swiper-175-prev', 
      },
      breakpoints: {
        767: {
          slidesPerView: 2,   
        },             
      }  
    });
  });
});