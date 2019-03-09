jQuery(document).ready(function($) {
	var burger = $('.burger'),
		menu_box = $('.menu_box'),
		menu_icons = $('.menu_icons'),
		menu_name = $('.menu_name');

	burger.click(menu);

	function menu() {
		burger_click();
		menu_box_click();
	}

	function burger_click() {
		burger.toggleClass('burger_active');
	}

	function menu_box_click() {
		menu_box.toggleClass('menu_box_active');
		menu_icons.toggleClass('menu_icons_active');
		menu_name.toggleClass('menu_name_active');
	}


	// -----------popup---------------

	var clous = $('.clous'),
		main_btn = $('.main_btn'),
		clous_popup = $('.clous_popup');

	main_btn.click(clous_show);
	clous_popup.click(clous_hide);

	function clous_show() {
		clous.addClass('clous_active');
	}

	function clous_hide() {
		clous.removeClass('clous_active');
	}


});