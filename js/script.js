$(document).ready(function(){
  $('.slider').slick({
    arrows:true,
    dots:true,
    speed:1000,
    initialSlide:0,
    // infinity:true,
    // autoplay:true,
    
  });
});
$(document).ready(function(){
  $('.slider__partners ').slick({
    arrows:false,
    speed:1000,
    initialSlide:0,
    dots:true,
    slidesToShow:4,
    slidesToScroll:2,
    speed:1000,
    // infinity:true,
    // autoplay:true,
    
  });
});