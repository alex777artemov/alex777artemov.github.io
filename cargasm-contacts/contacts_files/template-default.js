(function($) {
	$(document).ready(function() {
		$('a[href$=".gif"], a[href$=".jpg"], a[href$=".jpeg"], a[href$=".png"], [rel="fancybox"]').fancybox({
			padding: 0
		});

		var img_ = document.getElementsByTagName('img');
		for (var _i in img_) {
			img_[_i].oncontextmenu = function() {
				return false;
			}
			img_[_i].ondragstart = function() {
				return false;
			}
		}

		$('input.input__field, textarea.input__field').each(function() {
			var $INPUT_ = $(this);

			if (this.value.trim() !== '') {
				$INPUT_.parent().addClass('input--filled');
			}

			$INPUT_.on('focus', function(_event) {
				$(this).parent().addClass('input--filled');
			}).on('blur', function(_event) {
				if (this.value.trim() === '') {
					$(this).parent().removeClass('input--filled');
				}
			});
		});

		$('body').on('click', '.toggle-menu', function(_event) {
			$(this).toggleClass('open');
			$('.mobile-menu_header').toggle();
		});
		$('body').on('click', '.toggle-contact', function(_event) {
			$(this).toggleClass('open');
			$('.mobile-contact').toggle();
		});

		if ($('.selectpicker').length) {
			$('.selectpicker').selectpicker({
				liveSearchStyle: 'startsWith',
				noneResultsText: 'Нет совпададений с {0}',
				noneSelectedText: 'Ничего не выбрано',
				showContent: false
			});

			$('body').on('changed.bs.select', '.selectpicker', function(_event, _clickedIndex, _isSelected, _previousValue) {
				var $SELECT_ = $(_event.currentTarget);
				if ($SELECT_.hasClass('selectpicker--links')) {
					window.location.href = $SELECT_.val();
				}
			});
		}

		$('[data-toggle="tooltip"]').tooltip();
	});
})(jQuery);
