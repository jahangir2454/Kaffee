$(function(){
  window.addEventListener("scroll", function() {
      var header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
    })



    $('.menu-bar').click(function(){
      $('.menu-bar').toggleClass('activ')
      $('nav').toggleClass('activ')
    });

// banner slider
    $('.banner-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:false,
      fade: true,
      cssEase: 'linear'
    })


// counter
$('.counterup').counterUp({
  delay: 4,
  time: 1000
});

// venobox

$('.venobox').venobox({
  share: ['facebook', 'twitter', 'linkedin', 'pinterest', 'download'],
  spinner:'wave',
  spinColor:'#fec600',
  border:'10px',
  arrowsColor:'#fec600',
  bgcolor:'#fec600',
  closeColor:'#fec600',
});

// Today’s slider
$('.today-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
});








$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});










});