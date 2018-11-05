jQuery(document).ready(function($) {
	let val_one = document.getElementById('prise_value'),
		val_two = document.getElementById('prise_number'),
		btn_calc = document.getElementById('calc_btn'),
		calc_value_resoult = document.getElementById('calc_resoult'),
		val_bool = document.getElementById('calc_boolVar');
	
	// калькулятор

	btn_calc.addEventListener('click', resuoltCalc);

	function resuoltCalc() {
		let resoult_one = +(val_one.value), 
			resoult_two, 
			resoult_three = +(val_bool.value), 
			resoult;

		if ((+(val_two.value)) < 1) {
			resoult_two = 1;
		}
		else if ((+(val_two.value)) >= 1 && (+(val_two.value)) <= 5) {
			resoult_two = 0.95;
		}
		else if ((+(val_two.value)) > 5) {
			resoult_two = 0.9;
		}

		resoult = resoult_one * resoult_two * resoult_three; 

		calc_value_resoult.innerHTML = Math.ceil(resoult);
	}
});