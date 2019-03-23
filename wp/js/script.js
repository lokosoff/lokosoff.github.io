jQuery(document).ready(function($) {
	$('.slider').slick({
		dots: false,
		autoplay: true,
		speed: 700,
		autoplaySpeed: 2000,
		prevArrow: $('.arrow_left'),
		nextArrow: $('.arrow_right'),
	});
});