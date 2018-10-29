jQuery(document).ready(function($) {
	$('.slider').slick({
	  autoplay: true,
	  autoplaySpeed: 2000,
	  dots: false,
	  speed: 600,
	  fade: true,
	  cssEase: 'linear', 
	  arrow: true,
	  prevArrow: $('.prevArrow'),
	  nextArrow: $('.nextArrow')
	});
});