$(document).ready(function(){
	resizeStuff();
	$(window).on('resize',resizeStuff);
	
	function resizeStuff(){
		//Responsiveness
		if($(window).width()<1200 && $(window).width()>600){
			$('#leftFiller').removeClass('span3');
			$('#leftFiller').addClass('span2');
			$('#rightFiller').removeClass('span3');
			$('#leftFiller').addClass('span2');
			$('#content').removeClass('span6');
			$('#content').addClass('span8');
		}
		else{
			$('#leftFiller').removeClass('span2');
			$('#leftFiller').addClass('span3');
			$('#rightFiller').removeClass('span2');
			$('#leftFiller').addClass('span3');
			$('#content').removeClass('span8');
			$('#content').addClass('span6');
		}
		if($(window).width()<=600 && $(window).width()>0){
			$('#leftFiller').removeClass('span3');
			$('#leftFiller').addClass('span1');
			$('#rightFiller').removeClass('span3');
			$('#leftFiller').addClass('span1');
			$('#content').removeClass('span6');
			$('#content').addClass('span10');
		}
		else{
			$('#leftFiller').removeClass('span1');
			$('#leftFiller').addClass('span2');
			$('#rightFiller').removeClass('span1');
			$('#leftFiller').addClass('span2');
			$('#content').removeClass('span10');
			$('#content').addClass('span8');
		}
		if($(window).width()>1200){
			$('#leftFiller').removeClass('span2');
			$('#leftFiller').addClass('span3');
			$('#rightFiller').removeClass('span2');
			$('#leftFiller').addClass('span3');
			$('#content').removeClass('span8');
			$('#content').addClass('span6');
		}
		
	}
	//Scrolls page when nav menu item is clicked
	$('[name="sites"]').click(function(event){
		event.preventDefault();
		$('html, body').animate({scrollTop: $('[name="sites-section"]').offset().top - ($('[name="nav"]').height()+$('#headerBG').height()) - (($('[name="nav"]').height()+$('#headerBG').height())/10) + "px"}, "slow");
	});
	$('[name="logos"]').click(function(event){
		event.preventDefault();
		$('html, body').animate({scrollTop: $('[name="logos-section"]').offset().top - ($('[name="nav"]').height()+$('#headerBG').height()) - (($('[name="nav"]').height()+$('#headerBG').height())/10) + "px"}, "slow");
	});
	$('[name="ads"]').click(function(event){
		event.preventDefault();
		$('html, body').animate({scrollTop: $('[name="ads-section"]').offset().top - ($('[name="nav"]').height()+$('#headerBG').height()) - (($('[name="nav"]').height()+$('#headerBG').height())/10) + "px"}, "slow");
	});
	$('[name="prints"]').click(function(event){
		event.preventDefault();
		$('html, body').animate({scrollTop: $('[name="prints-section"]').offset().top - ($('[name="nav"]').height()+$('#headerBG').height()) - (($('[name="nav"]').height()+$('#headerBG').height())/10) + "px"}, "slow");
	});
	$('[name="about"]').click(function(event){
		event.preventDefault();
		$('html, body').animate({scrollTop: $('[name="about-section"]').offset().top - ($('[name="nav"]').height()+$('#headerBG').height()) - (($('[name="nav"]').height()+$('#headerBG').height())/10) + "px"}, "slow");
	});

	//Highlights nav menu item based on page location
	$(window).on("scroll",function(){
		var $scrollTop = $(window).scrollTop();
		if($('[name="sites-section"]').offset().top - 153 <= $scrollTop && $scrollTop <= $('[name="logos-section"]').offset().top - 154){
			$('[name="sites"]').addClass('magentaText');
		}
		else{
			$('[name="sites"]').removeClass('magentaText');
		}
		if($('[name="logos-section"]').offset().top - 153 <= $scrollTop && $scrollTop <= $('[name="ads-section"]').offset().top - 154){
			$('[name="logos"]').addClass('magentaText');
		}
		else{
			$('[name="logos"]').removeClass('magentaText');
		}
		if($('[name="ads-section"]').offset().top - 154 <= $scrollTop && $scrollTop <= $('[name="prints-section"]').offset().top - 154){
			$('[name="ads"]').addClass('magentaText');
		}
		else{
			$('[name="ads"]').removeClass('magentaText');
		}
		if($('[name="prints-section"]').offset().top - 154 <= $scrollTop && $scrollTop <= $('[name="about-section"]').offset().top - 154){
			$('[name="prints"]').addClass('magentaText');
		}
		else{
			$('[name="prints"]').removeClass('magentaText');
		}
		if($('[name="about-section"]').offset().top - 154 <= $scrollTop && $scrollTop <= $('[name="contact-section"]').offset().top - 154){
			$('[name="about"]').addClass('magentaText');
		}
		else{
			$('[name="about"]').removeClass('magentaText');
		}
	});









});