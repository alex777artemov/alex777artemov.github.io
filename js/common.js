$(document).ready(function () {
	$('.block-slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 2,
		arrows: true,
		prevArrow: '<i class="fa fa-angle-left prev-arrow jet-arrow slick-arrow"></i>',
		nextArrow: '<i class="fa fa-angle-right next-arrow jet-arrow slick-arrow"></i>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	
	$('.header-toggle-menu').on('click', function(){
		$('.header-menu').toggleClass('mobile-menu-active-state');
		$('.mobile-menu-overlay').toggleClass('mobile-menu-overlay_show');
		$('body').toggleClass('mobile-menu-visible');
	});
	$('.mobile-menu-overlay').on('click', function(){
		$(this).removeClass('mobile-menu-overlay_show');
		$('.header-menu').removeClass('mobile-menu-active-state');
		$('body').removeClass('mobile-menu-visible');
	});	
	
	
	$(".menu-item").click(function(e) {
		var subMenu = $(this).children(".sub-menu");
		if (!subMenu.hasClass("active")) {
			subMenu.addClass("active");
			e.preventDefault();
		}	
	});
	
	$(".menu-sub-megamenu").click(function(e) {
		var subMenu = $(this).find(".sub-megamenu");
		if (!subMenu.hasClass("active")) {
			subMenu.addClass("active");
			e.preventDefault();
		}
	});
	
});
