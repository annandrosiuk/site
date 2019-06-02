
$(document).ready(function () {

	if (typeof window.document.createElement('div').style.webkitLineClamp !== 'undefined') {
		document.querySelector('html').classList.add('webkit-line-clamp');
	}

	// init review carusel
	Global_main.ppp();
	Global_main.close();

	$('.ppp__wrap').on('click', function () {
		$('.ppp__box, .ppp').removeClass('is-active');
		$('.ppp__inp').val('');
		$('.page').removeClass('is-fixed');
	})

	Global_main.carousel({
		item: '.review__item',
		wrap: '.review__wrap'
	});

	function equalizeHeight(group) {
	  var maxHeight = 0;
	  group.each(function(index) {
	    var divHeight = $(this).height();
	    if(divHeight > maxHeight) {
	      maxHeight = divHeight;
	    }
	  });

	  group.css('height', maxHeight);
	}


	if($('.person__pic').length > 1) {
		$('.person').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			spead: 100,
			cssEase: 'linear',
			arrows: false,
			fade: true,
			asNavFor: '.speach'
		});
	}

	if($('.speach__text').length > 1) {
		$('.speach').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			asNavFor: '.person'
		});
	}



	if($('.dates__item').length > 5) {
		$('.dates__wrap').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			infinite: false,
			focusOnSelect: true,
			asNavFor: '.watches',
			responsive: [{
				breakpoint: 900,
				settings: {
					slidesToShow: 4
				}
			}, {
				breakpoint: 800,
				settings: {
					slidesToShow: 3
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 2
				},
			}, {
				breakpoint: 400,
				settings: {
					slidesToShow: 1
				}
			}]
		});
	}

	$('.watches').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: false,
		focusOnSelect: false,
		asNavFor: '.dates__wrap'
	});


	if($('.news__item').length > 3) {
		$('.news__row').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				responsive: [{
					breakpoint: 800,
					settings: {
						slidesToShow: 1
					}
				}]
		});
	};

	$(".burger-container-2").click(function() {
	  $(this).find(".burger-2").toggleClass("burger-active-2");
	  $('.header, .nav, .test').toggleClass('is-active');
	});


	//  menu mobile click touchstart
	$(document).on('touchstart ', function(e) {
		// e.preventDefault();

		var $menu = $('.nav__item.has-subnav');
		var $nav = $('.nav.is-active');
		var $closeBtn = $('.menu.is-active');

		if($(document).width() < 1024){

			if (!$menu.is(e.target) && $menu.has(e.target).length === 0 && !$('.menu *').is(e.target) && !$('.nav *').is(e.target)) {

				var item = e.target;
				$menu.removeClass('is-active');

				$('.header, .nav').removeClass('is-active');
				$('.burger-2').removeClass('burger-active-2');

			} else {
				var item = e.target;

				if($(item).parent('.has-subnav').hasClass('is-active') ) {

					$('.nav__item').removeClass('is-active');
					$('html, body').animate({
						scrollTop: $(".header").offset().top - 0
					}, 800);

				} else {
					$('.nav__item').removeClass('is-active');
					$(item).parents('.nav__item').addClass('is-active');

					$('html, body').animate({
						scrollTop: $(".header").offset().top - 0
					}, 800);
				}
			}
		}

	});



	var startText = '';
	var count = 0;

	var moreItem = $('.js-more').data('show');
	var allText = $('.' + moreItem ).text();
	var shortText = allText.split(' ', 110).join(' ');
	$('.' + moreItem ).text(shortText);

	$('.js-more').on('click touchstart ', function (e) {
		e.preventDefault();
		if(count < 1) {
			startText = allText;
		}
		count+=1;

		$('.'+moreItem).toggleClass('is-active');

		if($('.'+ moreItem ).hasClass('is-active')){
			$(this).addClass('is-active').html('<i class="icon-down"></i><span>Скрыть</span>');
			$('.' + moreItem ).text(startText);
		} else {
			$(this).removeClass('is-active').html('<i class="icon-down"></i><span>Показать</span>');
			$('.' + moreItem ).text(shortText);
		}
	});




	// if($(document).width() > 800) {
	// 	var s = skrollr.init();

	// 	// Refresh Skrollr after resizing our sections
	// 	s.refresh($('.startscreen-bg, .method-bg'));
	// }


	if($(document).width() < 1000) {

		Global_main.touchCarusel({
			item: '.learn__wrap'
		});

		Global_main.touchCarusel({
			item: '.benefit__wrap'
		});
	} else {
		$('.learn__wrap').slick('unslick');
		$('.benefit__wrap').slick('unslick');
	}


});


(function($){
  $(window).on("load",function(){
    $(".watches__slider").mCustomScrollbar({
      axis:"x",
      theme:"dark-3",
      scrollButtons: { enable: true }
    });
  });
})(jQuery);


$(window).resize(function(){
	if($(document).width() < 1000) {

		Global_main.touchCarusel({
			item: '.learn__wrap'
		});

		Global_main.touchCarusel({
			item: '.benefit__wrap'
		});
	} else {
		$('.learn__wrap').slick('unslick');
		$('.benefit__wrap').slick('unslick');
	}

});


// WEBPACK FOOTER //
// ./markup/static/js/main.js