jQuery(document).ready(function($) {
	let slide = document.getElementsByClassName('slide'),
		slider = document.getElementsByClassName('slider'),
		index = 0,
		slide_length = slide.length,
		prev = document.getElementsByClassName('both_left')[0],
		next = document.getElementsByClassName('both_right')[0];

	function removeClass() {
		for (let i= 0; i < slide.length; i++){
			slide[i].classList.remove('slide_active');
		}
	};

	slide[index].classList.add('slide_active');
	next.addEventListener('click', function() {
		index++;
		if (index > slide_length - 1){
			index = 0;
			slide[index].classList.add('slide_active');
		}
		console.log(index);
		removeClass();
		slide[index].classList.add('slide_active');
	});

	prev.addEventListener('click', function() {
		index--;
		if (index < 0){
			index = slide_length - 1;
			slide[index].classList.add('slide_active');
		}
		console.log(index);
		removeClass();
		slide[index].classList.add('slide_active');
	});

	// nav scroll
   $(".button_main_box, .registat_box").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
           top = $(id).offset().top;
       $('body,html').animate({scrollTop: top}, 1000);
      });

   // border

   let inp_form = document.getElementsByClassName('input_type'),
   	   input_span = document.getElementsByClassName('input_span');

   	   inp_form[0].addEventListener('keydown', input_span__active_0);
   	   inp_form[1].addEventListener('keydown', input_span__active_1);

   	   function input_span__active_0() {
   	   	inp_remove();
   	   	input_span[0].classList.add('input_span_active');
   	   	setTimeout(inp_remove, 300);
   	   }

   	   function input_span__active_1() {
   	   	inp_remove();
   	   	input_span[1].classList.add('input_span_active');
   	   	setTimeout(inp_remove, 300);
   	   }

   	   function inp_remove() {
   	   	for (let i = 0; i < inp_form.length; i++){
   	   		input_span[i].classList.remove('input_span_active');
   	   	}
   	   }

});