document.addEventListener('DOMContentLoaded', function(event) {
	let slide = document.getElementsByClassName('slid'),
		slider = document.getElementsByClassName('slider'),
		index = 0,
		prev = document.getElementsByClassName('prev')[0],
		next = document.getElementsByClassName('next')[0];

	function removeClass() {
		for (let i= 0; i < slide.length; i++){
			slide[i].classList.remove('active');
		}
	};

	slide[index].classList.add('active');
	next.addEventListener('click', function() {
		index++;
		if (index > 6){
			index = 0;
			slide[index].classList.add('active');
		}
		console.log(index);
		removeClass();
		slide[index].classList.add('active');
	});

	prev.addEventListener('click', function() {
		index--;
		if (index < 0){
			index = 6;
			slide[index].classList.add('active');
		}
		console.log(index);
		removeClass();
		slide[index].classList.add('active');
	});

});