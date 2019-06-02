var Global_main = new GlobalMainClass();

function GlobalMainClass() {
	var $this = $(this);

	//global alert
	this.alert = function (opt) {
		alert(opt.message);
	}


	/*--- close something ---*/
	/*--------------------------------------------------*/
	this.close = function (e) {
		var closeBtn = $('.js-close');

		closeBtn.on('click', function (e) {
			e.preventDefault();
			var closedItem = $(this).data('close').split(' ');
			for (var i = closedItem.length - 1; i >= 0; i--) {
				var close = $( '.' + closedItem[i] );
				close.removeClass('is-active');
			}
			$('.ppp__inp').val('');
			$('.page').removeClass('is-fixed');

		});
	}

	// slick carusel
	this.carousel = function (opt) {
		var item = $(opt.item);
		var wrap = $(opt.wrap);

		if( item.length > 3 ) {
			$('.review').find('.btns').show();
			wrap.slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				prevArrow: $('.review').find('.slick__prev'),
				nextArrow: $('.review').find('.slick__next'),
				responsive: [{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2
					}
				}, {
					breakpoint: 768,
					settings: {
						slidesToShow: 1
					}
				}]
			});
		};
	}

	//init carusel < 1000
	this.touchCarusel = function (opt) {
		var item = $(opt.item);

		item.each(function () {
			$(this).slick({
				slidesToShow: 2,
				slidesToScroll: 1,
				autoplay: true,
				responsive: [
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});
		})
	}



	this.fourSlider = function (opt) {

		var $slider = $(opt.slider);

		$slider.each(function () {
			var $slider = $(this);

			// if($item.length > 4) {
				$(this).slick({
				infinite: false,
				variableWidth: false,
				slidesToShow: 4,
				responsive: [
					{
						breakpoint: 99990,
						settings: "unslick"
					},
					{
						breakpoint: 1400,
						settings: {
							variableWidth: true,
							slidesToShow: 4,
							arrows: true
						}
					},
					{
						breakpoint: 1200,
						settings: {
							variableWidth: true,
							slidesToShow: 3,
							arrows: true
						}
					},
					{
						breakpoint: 1000,
						settings: {
							variableWidth: true,
							slidesToShow: 2,
							arrows: true
						}
					},
					{
						breakpoint: 650,
						settings: {
							variableWidth: true,
							slidesToShow: 1,
							arrows: true
						}
					}
				]
				});
			// }

		})

	}

	/*--- open ppp ---*/
	/*--------------------------------------------------*/
	this.ppp = function () {
		var pppBtn = $('.js-ppp');

		pppBtn.on('click', function (e) {
			e.preventDefault();

			var ppp = $('.ppp');
			var pppItem = $(this).data('ppp');

			$('.page').addClass('is-fixed');
			ppp.removeClass('is-active');
			ppp.addClass('is-active');

			var pppWindow = $( '#' + pppItem );
			var closeBtn = $( '#' + pppItem + ' .js-close' );
			pppWindow.addClass('is-active');
			closeBtn.focus();
		});

	};


};