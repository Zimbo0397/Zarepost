
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

$('.star').on('click', function(e) {
	e.preventDefault();
	$(this).toggleClass('active');
});


$('.card-container .like').each(function() {
	$(this).on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
	})
});


$('.text-over-toggle').each(function() {
  $(this).on('click', function(e) {
    e.preventDefault();
    $(this).closest('.text-holder').find('.text-height').toggleClass('active');
  });
});


$('.main-modal .close-btn').each(function() {
	$(this).on('click', function(e) {
		e.preventDefault();
		$(this).closest('.main-modal').removeClass('open');
	})
})


$('#numberModalOpen').on('click', function(e) {
	e.preventDefault();
	$('#numberModal').addClass('open');

	var selectVal = [];

	$('[name="repost-date"]').each(function(i) {
		$(this).on('change', function() {
			var curlVal = $(this).val();
			
			selectVal[i] = curlVal.toString();
		});
	});

	$('#numberModal .close-btn').on('click', function(e) {
		e.preventDefault();
		if(selectVal.length == 3 ) {
			selectVal = selectVal.toString().replace( /,/g, "." );

			var el = '<p class="blue">'+selectVal+'</p>';
			$('#numberModalOpen').parent().html(el);
		}
	});

	$('#numberModal .ch-button').on('click', function(e) {
		e.preventDefault();

		if(selectVal.length == 3 ) {
			selectVal = selectVal.toString().replace( /,/g, "." );

			var el = '<p class="blue">'+selectVal+'</p>';
			$('#numberModalOpen').parent().html(el);
		}
		$('#numberModal').removeClass('open');
	});

	
});


$('.filters .f-filters li a').each(function() {
	$(this).on('click', function() {
		$('.filters .f-filters li a').removeClass('active')
		$(this).toggleClass('active');
	});
});

$('.repost-header.ftrs .filters a').each(function() {
	$(this).on('click', function() {
		$('.repost-header.ftrs .filters a').removeClass('active')
		$(this).toggleClass('active');
	});
});


$('.view-btns .clear').each(function() {
	$(this).on('click', function(e) {
		e.preventDefault();
		$(this.closest('tr').remove())
	})
})

$( "#speed" ).selectmenu();



