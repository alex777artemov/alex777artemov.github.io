$(document).ready(function(){
	//Мобильное меню
	$('.open-mobile-menu').on('click', function(){
		$('.popup-mob-menu').fadeIn();
	});
	$('.popup-mob-menu .popup__close').on('click', function(){
		$('.popup-mob-menu').fadeOut();
	});
	//Сладеры на главной странице
	$('.main-slider').slick({
		infinite: false,
		prevArrow: '<i class="arrow arrow-prev"></i>',
		nextArrow: '<i class="arrow arrow-next"></i>',
	});
	$('.project-slider').slick({
		infinite: false,
		slidesToScroll: 1,
		slidesToShow: 1,
		variableWidth: true,
		swipeToSlide: true
	});
	$('.ensemble-slider').slick({
		centerMode: true,
		slidesToShow: 3,
		swipeToSlide: true,
		focusOnSelect: true,
		//centerPadding: 50,
		centerPadding: 10,
		//rtl: true,
		prevArrow: '<i class="arrow arrow-prev"></i>',
		nextArrow: '<i class="arrow arrow-next"></i>',
		responsive: [
			{
				breakpoint: 1240,
				settings: {
					centerMode: false,
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					centerMode: false,
					slidesToShow: 1,
				}
			},
		]
	});
	$('.project-page-gallery-slider').slick({
		prevArrow: '<i class="arrow arrow-prev"></i>',
		nextArrow: '<i class="arrow arrow-next"></i>',
		variableWidth: true,
		centerMode: true,
		//slidesToShow: 1,
		swipeToSlide: true,
		focusOnSelect: true,
	});
});
