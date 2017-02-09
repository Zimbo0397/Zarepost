
$(document).ready(function(){
  $('.bxslider').bxSlider({
		minSlides: 1,
		maxSlides: 3,
		slideWidth: 260,
		slideMargin: 10
  });
});

$('#mobile-nav-btn').on('click', function() {
	$('.mobile-nav-holder').toggleClass('open');
});

$('.acc-box').on('click', function(e) {
	e.preventDefault();
	$('.profile-panell').addClass('open');
	$('.black-plate').addClass('active');
	$('body').addClass('b-overflow');
});

$('.close-btn').each(function() {
	$(this).on('click', function(e) {
		e.preventDefault();
		$('.profile-panell').removeClass('open');
		$('.black-plate').removeClass('active');
		$('body').removeClass('b-overflow');
	});
});