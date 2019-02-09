jQuery(document).ready(function($) {
	$('.first_button button, .prises button').click(function() {
		$('.popup').css('transform', 'translateY(0%)');
		$('.clous').css('opacity','1').css('z-index', '777');
	});
	$('.popup span, .clous').click(function() {
		$('.popup').css('transform', 'translateY(-250%)');
		$('.clous').css('opacity','0').css('z-index', '-7');
	});

    $("nav, .offer_button").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });

    var wow = new WOW({
    	offset:200
    });
    wow.init();
});