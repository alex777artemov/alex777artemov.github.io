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
});
