document.addEventListener('DOMContentLoaded', function() {
	let madagment = document.getElementsByClassName('managment_history'),
		history_img = document.getElementsByClassName('history_img')[0],
		block_history = document.getElementsByClassName('block_history'),
		history_img_src = history_img.getAttribute('src');

	manag_block_none();
	manag_block_active(0);


	madagment[0].addEventListener('click', function() {
		manag_remove();
		manag_add(0);
		manag_block_active(0);
	});

	madagment[1].addEventListener('click', function() {
		manag_remove();
		manag_add(1);
		manag_block_active(1);
	});

	function manag_remove() {
		for (let i = 0; i < madagment.length; i++){
			madagment[i].classList.remove('managment_active');
		}
	}

	function manag_add(a) {
		madagment[a].classList.add('managment_active');
	}

	function manag_block_none() {
		for (let i = 0; i < block_history.length; i++) {
			block_history[i].classList.remove('block_history_active');
		}
	}

	function manag_block_active(b) {
		manag_block_none();
		block_history[b].classList.add('block_history_active');
	}

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

	// nav scroll
   $(".offer_btn_block_left, .offer_btn_block_right").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
           top = $(id).offset().top;
       $('body,html').animate({scrollTop: top}, 1000);
   });

});