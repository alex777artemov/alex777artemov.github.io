function includeScript(_scriptUrl) {
	document.write('<script type="text/javascript" src="' + _scriptUrl + '"></script>');
}

var userAgent_ = navigator.userAgent.toLowerCase(),
	isIE = (userAgent_.indexOf('msie') != -1 ? parseInt(userAgent_.split('msie')[1], 10) : false);

includeScript('/js/jquery.easing.js');

(function($) {
	if (isIE && isIE < 11) {
		window.includeScript('/js/pointer-events.js');

		$('html').addClass('lt-ie11');

		$(document).ready(function() {
			PointerEventsPolyfill.initialize({});
		});
	}

	var html_ = $('html');
/*
	if (html_.hasClass('desktop')) {
		window.includeScript('/js/jquery.ui.totop.js');

		$(document).ready(function() {
			$().UItoTop({
				containerClass: 'toTop fa fa-angle-up',
				easingType: 'easeOutQuart'
			});
		});
	}
*/
	if ((window.userAgent_.indexOf('msie') == -1) || (isIE && isIE > 9)) {
		if (html_.hasClass('desktop')) {
			window.includeScript('/js/wow.js');

			$(document).ready(function() {
				new WOW().init();
			});
		}
	}

	var metaViewport_ = (document.querySelector && document.querySelector('meta[name="viewport"]')),
		gestureStart = function() {
			metaViewport_.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0';
		},
		scaleFix = function() {
			if (metaViewport_ && /iPhone|iPad/.test(window.userAgent_) && !/Opera Mini/.test(window.userAgent_)) {
				metaViewport_.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
				document.addEventListener('gesturestart', gestureStart, false);
			}
		};

	scaleFix();

	if (window.orientation != undefined) {
		var match_ = window.userAgent_.match(/ipod|ipad|iphone/gi);
		if (!match_) {
			$('.sf-menus li').each(function() {
				if ($('> ul', this)[0]) {
					$('> a', this).toggle(function() {
						return false;
					}, function() {
						window.location.href = $(this).attr('href');
					});
				}
			})
		}
	}
})(jQuery);

var match_ = userAgent_.match(/ipod|ipad|iphone/gi),
	userScale_ = '';
if (!match_) {
	userScale_ = ', user-scalable=0';
}
document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0' + userScale_ + '" />');
