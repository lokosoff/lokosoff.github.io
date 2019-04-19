jQuery(document).ready(function($) {
	var confid_box = $(".confid_box");

	confid_box.click(confid);

	function confid() {
		$(this).children(".check_box").toggleClass('check_box_active');
		$(this).children(".check_box").children(".ok").toggleClass('ok_active');
	}

	var clous_popup = $('.clous_popup'), 
		btn_prise = $('.btn_prise'),
		stage_btn = $('.stage_btn'), 
		question_btn = $('.question_btn'), 
		clous_popup_x = $('.clous_popup_x'),
		call_box = $(".call_box"); 

	btn_prise.click(popup); 
	call_box.click(popup); 
	stage_btn.click(popup); 
	question_btn.click(popup); 
	clous_popup_x.click(popup); 

	function popup() {
		$('body').toggleClass('body_hidden');
		clous_popup.toggleClass('clous_popup_active')
	}

	var question_block = $(".question_block"); 

	question_block.click(question);

	function question() {
		var t = $(this);

		if (!t.children('.question_contant').hasClass('question_contant_active')){
			$('.question_contant').removeClass('question_contant_active');
		}

		$(this).children('.question_contant').toggleClass('question_contant_active');
	}
});