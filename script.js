 //-------------------------Change button #menu----------------------------------------------------------------------

 document.querySelector ('.c-humburger-line').addEventListener ('click', function (e) {
            e.preventDefault();
            this.classList.toggle ('is-active');
        })
        
//------------------------- Add/Remove hiden (#menu)-----------------------------------------------------------------
 
        // function screenResize(){
            
        //     let screen = document.documentElement.clientWidth;  
            
        //     if (screen <= 992) {
        //         console.log('remove hiden on screenResize');
        //         document.querySelector('#menu').classList.remove ('hide');
        //         document.querySelector('.menu').classList.add ('hide');
        //     }
        //     else if (screen > 992){
        //         document.querySelector('#menu').classList.add('hide');
        //         document.querySelector('.menu').classList.remove ('hide');
        //     }
        // }

        // document.addEventListener("DOMContentLoaded", function(event) {


        //     let clickSlider1 = document.querySelector('.slider-head__1');
        //     let clickSlider2 = document.querySelector('.slider-head__2');
        //     let clickSlider3 = document.querySelector(c-humburger-line'.slider-head__3');
        //     let slider1 = document.getElementById('slider-1');
        //     let slider2 = document.getElementById('slider-2');
        //     let slider3 = document.getElementById('slider-3');
            
        //     console.log(clickSlider2);
            
        //     clickSlider2.onclick = function(){
        //         slider2.classList.remove('hide');
        //         slider1.classList.add('hide');  
        //         slider3.classList.add('hide');  
        //     }
            
            

           
            // window.onresize = screenResize;
           
        

        
//---------------------------------------- Popup menu --------------------------------------------------------------------------
let isMenuVisible = false;

document.querySelector('.c-humburger').onclick = menu;

window.onresize = hideMenu;

window.onscroll = function(){    
    document.querySelector('.menu998').style.right = '-330px'; 
    document.querySelector('.c-humburger-line').classList.remove ('is-active');
    if (isMenuVisible == true){
        isMenuVisible = !isMenuVisible;
    }
}

function hideMenu() {    
        document.querySelector('.menu998').style.right = '-330px';
}

function menu() {    
    if (isMenuVisible) {
        document.querySelector('.menu998').style.right = '-330px';
    }
    else  {
        document.querySelector('.menu998').style.right = '0';
    }
    isMenuVisible = !isMenuVisible;
}
    

//--------------------------------------- Button up ----------------------------------------------------------------------------
$(function(){ 
        $(window).scroll(function(){ 
        if($(this).scrollTop()!=0){ 
            $('.btn-up').fadeIn(); 
        } 
        else{ 
        $('.btn-up').fadeOut(); 
        } 
    }); 
$('.btn-up').click(function(){ 
    $('body,html').animate({scrollTop:0},500); 
    }); 
}); 

$(function() { 
    $('a[href="#scroll"]').click(function(event) { 
    event.preventDefault() 
var el = $('.block-scroll'); 
$('body,html').animate({ 
scrollTop: $(el).offset().top 
}, 1000); 
}); 
}); 

//------------------------------------------Sleder (for what you need a realtor)------------------------------------------------
var sliderBtn = document.querySelectorAll(".slider-head")
var page1 = document.getElementById('page-1');
var page2 = document.getElementById('page-2');
var page3 = document.getElementById('page-3');

sliderBtn.forEach(function(element){
    element.addEventListener('click', changeSlider);
})
sliderBtn.forEach(function(element){
    element.addEventListener('mouseleave', changeColor);
})
function changeColor(){
    this.style.background = "#FFA64C";
}
function changeSlider() {
    this.style.background = "#fff";
    if (this.id == 'slider-1') {
        page1.classList.remove('hide');
        page2.classList.add('hide');
        page3.classList.add('hide');
    } else if(this.id == 'slider-2') {
        page1.classList.add('hide');
        page2.classList.remove('hide');
        page3.classList.add('hide');
    } else if(this.id == 'slider-3') {
        page1.classList.add('hide');
        page2.classList.add('hide');
        page3.classList.remove('hide');
    }
}
// --------------------------------------------popup for form ----------------------------------
// Отправка заявки 
$(document).ready(function() {
	$('#form').submit(function() { 
		if (document.form.name.value == '' || document.form.tel.value == '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});
});

// Закрыть попап «спасибо»
$('.js-close-thank-you').click(function() { // по клику на крестик
	$('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
    var popup = $('.popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay-thank-you').fadeOut();
    }
});

// Маска ввода номера телефона (плагин maskedinput)
// $(function($){
// 	$('[name="tel"]').mask("+7(999) 999-9999");
// });