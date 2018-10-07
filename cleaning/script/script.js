jQuery(document).ready(function($) {
	$("ul, .offer_arrow_down, .prise_btn_box, .discount_btn_box").on("click","a", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
	        top = $(id).offset().top;
	    $('body,html').animate({scrollTop: top}, 1000);
	});

	// stycki menu
	let elem = $('#home'),
		homeHeight = elem.height(),
		menu = $('.menu_fixed');
	window.onscroll = function() {
		if (window.pageYOffset > homeHeight) {
			menu.addClass('stycki_active');
		}
		else{
			menu.removeClass('stycki_active');
		}
	}

	// slider

	let slide = document.getElementsByClassName('slide'),
		iterator = 0,
		slider_box = document.getElementsByClassName('slider_box')[0];

	removeSlide();
	slideTimer();

	slider_box.addEventListener('click', function(event) {
		if (event.target && event.target.classList.contains('slide')) {
			removeSlide();
			for (let i = 0; i < slide.length; i++){
				if (slide[i] == event.target){
					iterator = i;
					addSlide(i);
				}
			}
		}
	});

	function removeSlide() {
		for (let i = 0; i < slide.length; i++){
			slide[i].classList.remove('slide_active');
		}
	}

	function addSlide(n) {
		removeSlide();
		slide[n].classList.add('slide_active');
	}

	function slideTimer() {
		let sliderInterval = setInterval(function() {

		if (iterator >= slide.length) {
			iterator = 0;
		}

		addSlide(iterator); 
		iterator++; 

		if (window.innerWidth <= 768) {
			clearInterval(sliderInterval);
		}
		}, 1500)
	}

	// меню popup

	let burger = document.getElementsByClassName('burger'),
		nav_fixed = document.getElementsByClassName('nav_fixed')[0],
		clous_nav = document.getElementsByClassName('clous_nav')[0],
		nav_fixed_menu = document.getElementsByClassName('nav_fixed_menu')[0];

	burger[0].addEventListener('click', menuActive);
	burger[1].addEventListener('click', menuActive);
	clous_nav.addEventListener('click', menuRemove);

	nav_fixed_menu.addEventListener('click', function(e) {
		if (e.target && e.target.tagName == 'A') {
			menuRemove();
		}
	});

	function menuActive() {
		nav_fixed.classList.add('nav_fixed_active');
	}

	function menuRemove() {
		nav_fixed.classList.remove('nav_fixed_active');
	}

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
		iframe.setAttribute('src', 'https://www.youtube.com/embed/qpne_WSPfgo?rel=0');
		popup_video_wrap[0].classList.add('popup_video_wrap_active');
	}

	function video_hide() {
		iframe.setAttribute('src', '');
		console.log(iframe.getAttribute('src'));
		popup_video_wrap[0].classList.remove('popup_video_wrap_active');
	}
});