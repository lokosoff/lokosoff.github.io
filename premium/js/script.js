jQuery(document).ready(function($) {
	var wow = new WOW(
	  {
	    boxClass:     'wow',      // animated element css class (default is wow)
	    animateClass: 'animated', // animation css class (default is animated)
	    offset:       300,          // distance to the element when triggering the animation (default is 0)
	    mobile:       true,       // trigger animations on mobile devices (default is true)
	    live:         true,       // act on asynchronously loaded content (default is true)
	    callback:     function(box) {
	      // the callback is fired every time an animation is started
	      // the argument that is passed in is the DOM node being animated
	    },
	    scrollContainer: null // optional scroll container selector, otherwise use window
	  }
	);
	wow.init();

	// -----Родственники----------

	let btn_parant = $('.btn_parant'),
		parant_btn_box = $('.parant_btn_box')[0],
		parant_box = $('.parant_box'); 

	parant_active(0);

	parant_btn_box.addEventListener('click', function(event) {
		if (event.target && event.target.classList.contains('btn_parant')) {
			for (let i = 0; i < parant_box.length; i++) {
				if (btn_parant[i] == event.target) {
					parant_active(i);
				}
			}
		}
	});

	function parant_active(a) {
		parant_none();
		parant_box[a].classList.add('parant_box_active');
		btn_parant[a].classList.add('btn_parant_active');
	}

	function parant_none() {
		for (let i = 0; i < parant_box.length; i++){
			parant_box[i].classList.remove('parant_box_active');
			btn_parant[i].classList.remove('btn_parant_active');
		}
	}

		// nav scroll
	   $(".main_wrap_btn_box").on("click","a", function (event) {
	       event.preventDefault();
	       var id  = $(this).attr('href'),
	           top = $(id).offset().top;
	       $('body,html').animate({scrollTop: top}, 1000);
	   });
});