jQuery(document).ready(function($) {
    // аккордион на странице О НАС
    let faq = document.getElementsByClassName('about_accordion')[0],
        head_accord = document.getElementsByClassName('head_about_accordion_box'),
        text_accord = document.getElementsByClassName('about_accordion_text_box');

    about_accordr();
    faq.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('head_about_accordion_box') ) {
            for (let q = 0; q < head_accord.length; q++){
                if (e.target == head_accord[q] ) {
                    if (!head_accord[q].classList.contains('head_about_accordion_box__active')) {
                        removeActiveAccord();
                        head_accord[q].classList.add('head_about_accordion_box__active');
                        text_accord[q].classList.add('about_accordion_text_box_active');
                    }
                    else{
                        removeActiveAccord();
                    }
                }
            }
        }
    });

    function removeActiveAccord() {
        for (let a = 0; a < head_accord.length; a++){
            head_accord[a].classList.remove('head_about_accordion_box__active');
            text_accord[a].classList.remove('about_accordion_text_box_active');
        }
    }

    function about_accordr() {
        removeActiveAccord(); 
        head_accord[0].classList.add('head_about_accordion_box__active');
        text_accord[0].classList.add('about_accordion_text_box_active');
    }

    // галерея 

    let btn_box = document.getElementsByClassName('about_galery_both_box')[0],
        img_two = document.getElementsByClassName('img_two'),
        btn_galery = document.getElementsByClassName('about_galery_both_text'),
        image_galery = document.getElementsByClassName('about_galery_item'); 

    galerybtn(0);


    btn_box.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('about_galery_both_text')){
            for (let i = 0; i < btn_galery.length; i++){
                if (btn_galery[i] == e.target) {
                    galerybtn(i);
                }
            }
        }
    }); 

    function galerybtn(e) {
        for (let i = 0; i < btn_galery.length; i++){
            btn_galery[i].classList.remove('about_galery_both_textActive')
        }

        btn_galery[e].classList.add('about_galery_both_textActive')
    }

    function img_two_hide() {
        for (let i = 0; i < img_two.length; i++){
            img_two[i].classList.remove('img_galery_rotate');
        }
    }

    function img_two_show() {
        for (let i = 0; i < img_two.length; i++){
            img_two[i].classList.add('img_galery_rotate');
        }
    }

    btn_galery[0].addEventListener('click', img_two_hide);
    btn_galery[1].addEventListener('click', img_two_show);

    // stycki menu
    let elem = $('#about'),
        homeHeight = elem.height(),
        menu = $('.stycki');
    window.onscroll = function() {
        if (window.pageYOffset > homeHeight) {
            menu.addClass('stycki_active');
        }
        else{
            menu.removeClass('stycki_active');
        }
    }
});