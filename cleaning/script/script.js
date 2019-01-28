jQuery(document).ready(function($) {
	$("ul, .offer_arrow_down, .prise_btn_box, .discount_btn_box").on("click","a", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
	        top = $(id).offset().top;
	    $('body,html').animate({scrollTop: top}, 1000);
	});

	// video

	let video_clous = document.getElementsByClassName('video_clous'),
		popup_video_wrap = document.getElementsByClassName('popup_video_wrap'),
		iframe = document.getElementsByClassName("video")[0],
		about_play = document.getElementsByClassName('about_play');

	about_play[0].addEventListener('click', video_show);
	about_play[1].addEventListener('click', video_show);
	video_clous[0].addEventListener('click', video_hide);
	popup_video_wrap[0].addEventListener('click', video_hide);

	function video_show() {
		iframe.setAttribute('src', 'https://www.youtube.com/embed/20c_Kq91D2I');
		popup_video_wrap[0].classList.add('popup_video_wrap_active');
	}

	function video_hide() {
		iframe.setAttribute('src', '');
		console.log(iframe.getAttribute('src'));
		popup_video_wrap[0].classList.remove('popup_video_wrap_active');
	}

	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: $('.arrow_left'),
		nextArrow: $('.arrow_right'),
	});
});