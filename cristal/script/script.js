jQuery(document).ready(function($) {
	$("ul, .offer_arrow_down, .prise_btn_box, .discount_btn_box").on("click","a", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
	        top = $(id).offset().top;
	    $('body,html').animate({scrollTop: top}, 1000);
	});


	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: $('.arrow_left'),
		nextArrow: $('.arrow_right'),
	});

	// video

	var video_clous = $('.video_clous'),
		popup_video_wrap = $('.popup_video_wrap'),
		iframe = $(".popup_video"),
		about_play = $('.about_play');

	about_play.click(video_show);
	video_clous.click(video_hide);
	popup_video_wrap.click(video_hide);

	function video_show() {
		iframe.append('<iframe src="https://www.youtube.com/embed/20c_Kq91D2I" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen class="video"></iframe>');
		popup_video_wrap.addClass('popup_video_wrap_active');
	}

	function video_hide() {
		$('.video').remove();
		popup_video_wrap.removeClass('popup_video_wrap_active');
	}

});