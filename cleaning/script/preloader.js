jQuery(document).ready(function($) {
	document.body.onload = function() {
		setTimeout(function() {
			$('.preloader_wrap').addClass('clous_preload_hide');
		}, 1500);
	};
});