$(document).ready(function(){

	var mixer = mixitup('.filter-blog',{
     
     animation: {
        effectsIn: 'fade translateY(-100%)'
    }
	});

	$('.menu-icon').click(function(){
		$('.left-content-slidebar').show();
		return false;
	});

	$('.navbar-hide-show').click(function(){
		$('.left-content-slidebar').hide();
		return false;
		 
	});

	$('.search-button').click(function(){
		$('.search-bar').show();
		return false;
	});
	
	$('.search-close').click(function(){
		$('.search-bar').hide();
		return false;
	});
});

$(document).ready(function() {
  $('.popup-button').magnificPopup({
		  type:'inline',
		  midClick: true 
	});
});


