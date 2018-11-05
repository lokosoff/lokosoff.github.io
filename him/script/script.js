document.addEventListener('DOMContentLoaded', function(e) {
	// Слайдер на главной странице

	let prevHome = document.getElementsByClassName('prevHome')[0],
		nextHome = document.getElementsByClassName('nextHome')[0],
		homeSlide = document.getElementsByClassName('saleSlide'),
		iteratorHome = 0;

	homeSlideHide(0);

	prevHome.addEventListener('click', prevHomeClick);
	nextHome.addEventListener('click', nextHomeClick);

	function homeSlideHide(e) {
		for (let i = 0; i < homeSlide.length; i++){
			homeSlide[i].style.display = 'none'; 
		}

		homeSlide[e].style.display = 'block';
	}

	function prevHomeClick() {
		iteratorHome--;

		if (iteratorHome < 0) {
			iteratorHome = 2;
			homeSlideHide(iteratorHome);
		}
		else{
			homeSlideHide(iteratorHome);
		}
	}

	function nextHomeClick() {
		iteratorHome++;
		if (iteratorHome > 2) {
			iteratorHome = 0;
			homeSlideHide(iteratorHome);
		}
		else{
			homeSlideHide(iteratorHome);
			
		}
	}

	// аккордион скидок

	let sale_accord_btn = document.getElementsByClassName('sale_number_text'),
		sale_box = document.getElementsByClassName('sale_numberBox')[0];

	sale_box.addEventListener('click', function(e) {
		if (e.target && e.target.classList.contains('sale_number_text')){
			for (let i = 0; i < sale_accord_btn.length; i++){
				if (sale_accord_btn[i] == e.target) {
					iteratorHome = i;
					homeSlideHide(iteratorHome);
					console.log(iteratorHome)
				}
			}
		}
	});

	// Плавные ссылки
	$(".btn_header_box, .sale_content_button_box").on("click","a", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
	        top = $(id).offset().top;
	    $('body,html').animate({scrollTop: top}, 1000);
	});

	// stycki menu
	let elem = $('#home'),
		homeHeight = elem.height(),
		menu = $('.stycki');
	window.onscroll = function() {
		if (window.pageYOffset > homeHeight) {
			menu.addClass('stycki_active');
		}
		else{
			menu.removeClass('stycki_active');
		}
	}
});

