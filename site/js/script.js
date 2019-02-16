jQuery(document).ready(function($) {
	$('.oninput').numeric();

// ---------Аттрибут телефона--------
	attr_phone();

	$(window).resize(function(event) {
		attr_phone();
	});

	function attr_phone() {
		var windowWidth = $(window).width();

		if (windowWidth < 770){
			$('.phone').attr('href', 'tel:89088354752');
		}

		else{
			$('.phone').removeAttr('href');
		}
	}

// -------popup----------

	var backcall = $(".backcall"),
	    span_clous = $(".span_clous"),
		close = $(".close");

	backcall.on("click", popupShow);
	span_clous.on("click", popupHide);

	function popupShow() {
		close.addClass('popup_show');
	}

	function popupHide() {
		close.removeClass('popup_show');
	}

// ---------Валидация формы----------

$('.form_main, .form_footer').submit(function(event) {
	event.preventDefault();

	var phoneMain = $(this).find('.input_main');
	var phoneMainVal = $(this).find('.input_main').val();

	if (phoneMainVal.length < 7) {
		inputError(phoneMain);
	}
	else{
		inputDone(phoneMain);
		$.ajax({
			url: '../main.php',
			type: 'POST',
			dataType: 'html',
			data: {phone: phoneMainVal},
		})
		.done(function() {
			window.location.href = '../add.html'
		})
		.fail(function() {
			inputDone(phoneMain);
		}); 
	}
});

$('.form_popup').submit(function(event) {
	event.preventDefault();

	var namePopupVal = $(this).find('.popup_name').val();
	var phonePopup = $(this).find('.popup_phone');
	var phonePopupVal = phonePopup.val();

	if (phonePopupVal.length < 7) {
		inputError(phonePopup);
	}
	else{
		inputDone(phonePopup);
		$.ajax({
			url: '../popup.php',
			type: 'POST',
			dataType: 'html',
			data: {name: namePopupVal, phone: phonePopupVal},
		})
		.done(function() {
			window.location.href = '../add.html'
		})
		.fail(function() {
			inputDone(phonePopup);
		}); 
	}
});


function inputError(v) {
	v.addClass('oninputError');
}

function inputDone(v) {
	v.removeClass('oninputError');
}

});