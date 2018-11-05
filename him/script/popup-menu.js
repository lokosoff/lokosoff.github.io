jQuery(document).ready(function($) {
	let burger_btn = document.getElementsByClassName('burger_box'),
		clous = document.getElementsByClassName('clous_popup_menu')[0],
		menu_a = document.getElementsByClassName('popup_menu_a'),
		menu_box = document.getElementsByClassName('list_popup_menu')[0],
		menu = document.getElementsByClassName('popup_menu')[0];

	console.log(burger_btn);

	burger_btn[0].addEventListener('click', menu_active);
	burger_btn[1].addEventListener('click', menu_active);
	clous.addEventListener('click', menu_hide);
	menu_box.addEventListener('click', function(e) {
		if (e.target && e.target.classList.contains('popup_menu_a')) {
			menu_hide();
		}
	})

	menu_hide();

	function menu_active() {
		menu.classList.add('popup_menu_active');
	}

	function menu_hide() {
		menu.classList.remove('popup_menu_active');
	}
});