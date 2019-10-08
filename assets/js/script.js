/*--- Write Javascript Here ---*/
$(document).ready(function(){

  $('.hm-fp-img-wl').on("click", function(e){
    $('.fa-heart').toggleClass('checked');
  });

  $('.c-img-wl').on("click", function(e){
    $('.fa-heart').toggleClass('checked');
  });
  
  $('#accordDescHead').on("click", function(e){
    $('.arrow-desc-accord').toggleClass('active');
  });

  $('#accordReviewHead').on("click", function(e){
    $('.arrow-review-accord').toggleClass('active');
  });
    
});

new WOW().init();

// Hamburger Mobile Menu
var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
  $hamburger.toggleClass("is-active");
  $('#header-m').toggle();
});

/*--- Owl Carousel ---*/
$('.hm-b-c').owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  items: 1,
  navText: ["<img src='assets/img/arrow-l.png'>","<img src='assets/img/arrow-r.png'>"]
});

$('.prd-c').owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  dots: false,
  items: 1,
  navText: ["<img src='assets/img/arrow-l.png'>","<img src='assets/img/arrow-r.png'>"]
});
/*--- /Owl Carousel ---*/