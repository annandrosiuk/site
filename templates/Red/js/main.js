/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
			/******/
};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
		/******/
}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./static/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
	/******/
})
/************************************************************************/
/******/([
/* 0 */
/***/ (function (module, exports) {

		'use strict';

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
				$(".form-info").removeClass('hidden');
						$(".message-send").addClass('hidden');
				$('.page').removeClass('is-fixed');
			});

			

			$(function () {
                $('.ppp__inp').keyup(function () {
                    if ($('#name').val() == '' || $('#phoneNum').val() == '' || $('#email').val() == '') {
                        //Check to see if there is any text entered
                        // If there is no text within the input ten disable the button
                        $('.btn-message').prop('disabled', true);
					} else
					
					{
                        //If there is text in the input, then enable the button
                        $('.btn-message').prop('disabled', false);
                    }
				});

			}); 
			
			$(".btn-message").click(function (e) {
				$(".form-info").addClass('hidden');
				$(".message-send").removeClass('hidden');
				$('.btn-message').prop('disabled', true);
				$('.input').val('');
			});

			Global_main.carousel({
				item: '.review__item',
				wrap: '.review__wrap'
			});

			function equalizeHeight(group) {
				var maxHeight = 0;
				group.each(function (index) {
					var divHeight = $(this).height();
					if (divHeight > maxHeight) {
						maxHeight = divHeight;
					}
				});

				group.css('height', maxHeight);
			}

			if ($('.person__pic').length > 1) {
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

			if ($('.speach__text').length > 1) {
				$('.speach').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true,
					asNavFor: '.person'
				});
			}

			if ($('.dates__item').length > 5) {
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
						}
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

			if ($('.news__item').length > 3) {
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

			$(".burger-container-2").click(function () {
				$(this).find(".burger-2").toggleClass("burger-active-2");
				$('.header, .nav, .test').toggleClass('is-active');
			});

			//  menu mobile click touchstart
			$(document).on('touchstart ', function (e) {
				// e.preventDefault();

				var $menu = $('.nav__item.has-subnav');
				var $nav = $('.nav.is-active');
				var $closeBtn = $('.menu.is-active');

				if ($(document).width() < 1024) {

					if (!$menu.is(e.target) && $menu.has(e.target).length === 0 && !$('.menu *').is(e.target) && !$('.nav *').is(e.target)) {

						var item = e.target;
						$menu.removeClass('is-active');

						$('.header, .nav').removeClass('is-active');
						$('.burger-2').removeClass('burger-active-2');
					} else {
						var item = e.target;

						if ($(item).parent('.has-subnav').hasClass('is-active')) {

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
			var allText = $('.' + moreItem).text();
			var shortText = allText.split(' ', 110).join(' ');
			$('.' + moreItem).text(shortText);

			$('.js-more').on('click touchstart ', function (e) {
				e.preventDefault();
				if (count < 1) {
					startText = allText;
				}
				count += 1;

				$('.' + moreItem).toggleClass('is-active');

				if ($('.' + moreItem).hasClass('is-active')) {
					$(this).addClass('is-active').html('<i class="icon-down"></i><span>Скрыть</span>');
					$('.' + moreItem).text(startText);
				} else {
					$(this).removeClass('is-active').html('<i class="icon-down"></i><span>Показать</span>');
					$('.' + moreItem).text(shortText);
				}
			});

			// if($(document).width() > 800) {
			// 	var s = skrollr.init();

			// 	// Refresh Skrollr after resizing our sections
			// 	s.refresh($('.startscreen-bg, .method-bg'));
			// }


			if ($(document).width() < 1000) {

				Global_main.touchCarusel({
					item: '.learn__wrap'
				});

				Global_main.touchCarusel({
					item: '.benefit__wrap'
				});
			} else {
				// $('.learn__wrap').slick('unslick');
				// $('.benefit__wrap').slick('unslick');
			}
		});

		(function ($) {
			$(window).on("load", function () {
				$(".watches__slider").mCustomScrollbar({
					axis: "x",
					theme: "dark-3",
					scrollButtons: { enable: true }
				});
			});
		})(jQuery);

		$(window).resize(function () {
			if ($(document).width() < 1000) {

				Global_main.touchCarusel({
					item: '.learn__wrap'
				});

				Global_main.touchCarusel({
					item: '.benefit__wrap'
				});
			} else {
				// $('.learn__wrap').slick('unslick');
				// $('.benefit__wrap').slick('unslick');
			}
		});

		/***/
})
/******/]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTI5MWM3NGUzNTViZDMwNjAxYjgiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5Iiwid2luZG93IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwid2Via2l0TGluZUNsYW1wIiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsIkdsb2JhbF9tYWluIiwicHBwIiwiY2xvc2UiLCJvbiIsInJlbW92ZUNsYXNzIiwidmFsIiwiY2Fyb3VzZWwiLCJpdGVtIiwid3JhcCIsImVxdWFsaXplSGVpZ2h0IiwiZ3JvdXAiLCJtYXhIZWlnaHQiLCJlYWNoIiwiaW5kZXgiLCJkaXZIZWlnaHQiLCJoZWlnaHQiLCJjc3MiLCJsZW5ndGgiLCJzbGljayIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwic3BlYWQiLCJjc3NFYXNlIiwiYXJyb3dzIiwiZmFkZSIsImFzTmF2Rm9yIiwiYXV0b3BsYXkiLCJpbmZpbml0ZSIsImZvY3VzT25TZWxlY3QiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiY2xpY2siLCJmaW5kIiwidG9nZ2xlQ2xhc3MiLCJlIiwiJG1lbnUiLCIkbmF2IiwiJGNsb3NlQnRuIiwid2lkdGgiLCJpcyIsInRhcmdldCIsImhhcyIsInBhcmVudCIsImhhc0NsYXNzIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsInBhcmVudHMiLCJhZGRDbGFzcyIsInN0YXJ0VGV4dCIsImNvdW50IiwibW9yZUl0ZW0iLCJkYXRhIiwiYWxsVGV4dCIsInRleHQiLCJzaG9ydFRleHQiLCJzcGxpdCIsImpvaW4iLCJwcmV2ZW50RGVmYXVsdCIsImh0bWwiLCJ0b3VjaENhcnVzZWwiLCJtQ3VzdG9tU2Nyb2xsYmFyIiwiYXhpcyIsInRoZW1lIiwic2Nyb2xsQnV0dG9ucyIsImVu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QUF6QjtBQUdBLEdBVEQsTUFTTztBQUNOakIsS0FBRSxjQUFGLEVBQWtCNEIsS0FBbEIsQ0FBd0IsU0FBeEI7QUFDQTVCLEtBQUUsZ0JBQUYsRUFBb0I0QixLQUFwQixDQUEwQixTQUExQjtBQUNBO0FBR0QsRUFwTkQ7O0FBdU5BLEVBQUMsVUFBUzVCLENBQVQsRUFBVztBQUNWQSxJQUFFRyxNQUFGLEVBQVVVLEVBQVYsQ0FBYSxNQUFiLEVBQW9CLFlBQVU7QUFDNUJiLEtBQUUsa0JBQUYsRUFBc0J5RSxnQkFBdEIsQ0FBdUM7QUFDckNDLFVBQUssR0FEZ0M7QUFFckNDLFdBQU0sUUFGK0I7QUFHckNDLG1CQUFlLEVBQUVDLFFBQVEsSUFBVjtBQUhzQixJQUF2QztBQUtELEdBTkQ7QUFPRCxFQVJELEVBUUdDLE1BUkg7O0FBV0E5RSxHQUFFRyxNQUFGLEVBQVU0RSxNQUFWLENBQWlCLFlBQVU7QUFDMUIsTUFBRy9FLEVBQUVDLFFBQUYsRUFBWWdELEtBQVosS0FBc0IsSUFBekIsRUFBK0I7O0FBRTlCdkMsZUFBWThELFlBQVosQ0FBeUI7QUFDeEJ2RCxVQUFNO0FBRGtCLElBQXpCOztBQUlBUCxlQUFZOEQsWUFBWixDQUF5QjtBQUN4QnZELFVBQU07QUFEa0IsSUFBekI7QUFHQSxHQVRELE1BU087QUFDTmpCLEtBQUUsY0FBRixFQUFrQjRCLEtBQWxCLENBQXdCLFNBQXhCO0FBQ0E1QixLQUFFLGdCQUFGLEVBQW9CNEIsS0FBcEIsQ0FBMEIsU0FBMUI7QUFDQTtBQUVELEVBZkQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9zdGF0aWMvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTI5MWM3NGUzNTViZDMwNjAxYjgiLCJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuXHRpZiAodHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKS5zdHlsZS53ZWJraXRMaW5lQ2xhbXAgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLmNsYXNzTGlzdC5hZGQoJ3dlYmtpdC1saW5lLWNsYW1wJyk7XG5cdH1cblxuXHQvLyBpbml0IHJldmlldyBjYXJ1c2VsXG5cdEdsb2JhbF9tYWluLnBwcCgpO1xuXHRHbG9iYWxfbWFpbi5jbG9zZSgpO1xuXG5cdCQoJy5wcHBfX3dyYXAnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0JCgnLnBwcF9fYm94LCAucHBwJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXHRcdCQoJy5wcHBfX2lucCcpLnZhbCgnJyk7XG5cdFx0JCgnLnBhZ2UnKS5yZW1vdmVDbGFzcygnaXMtZml4ZWQnKTtcblx0fSlcblxuXHRHbG9iYWxfbWFpbi5jYXJvdXNlbCh7XG5cdFx0aXRlbTogJy5yZXZpZXdfX2l0ZW0nLFxuXHRcdHdyYXA6ICcucmV2aWV3X193cmFwJ1xuXHR9KTtcblxuXHRmdW5jdGlvbiBlcXVhbGl6ZUhlaWdodChncm91cCkge1xuXHQgIHZhciBtYXhIZWlnaHQgPSAwO1xuXHQgIGdyb3VwLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcblx0ICAgIHZhciBkaXZIZWlnaHQgPSAkKHRoaXMpLmhlaWdodCgpO1xuXHQgICAgaWYoZGl2SGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XG5cdCAgICAgIG1heEhlaWdodCA9IGRpdkhlaWdodDtcblx0ICAgIH1cblx0ICB9KTtcblxuXHQgIGdyb3VwLmNzcygnaGVpZ2h0JywgbWF4SGVpZ2h0KTtcblx0fVxuXG5cblx0aWYoJCgnLnBlcnNvbl9fcGljJykubGVuZ3RoID4gMSkge1xuXHRcdCQoJy5wZXJzb24nKS5zbGljayh7XG5cdFx0XHRzbGlkZXNUb1Nob3c6IDEsXG5cdFx0XHRzbGlkZXNUb1Njcm9sbDogMSxcblx0XHRcdHNwZWFkOiAxMDAsXG5cdFx0XHRjc3NFYXNlOiAnbGluZWFyJyxcblx0XHRcdGFycm93czogZmFsc2UsXG5cdFx0XHRmYWRlOiB0cnVlLFxuXHRcdFx0YXNOYXZGb3I6ICcuc3BlYWNoJ1xuXHRcdH0pO1xuXHR9XG5cblx0aWYoJCgnLnNwZWFjaF9fdGV4dCcpLmxlbmd0aCA+IDEpIHtcblx0XHQkKCcuc3BlYWNoJykuc2xpY2soe1xuXHRcdFx0c2xpZGVzVG9TaG93OiAxLFxuXHRcdFx0c2xpZGVzVG9TY3JvbGw6IDEsXG5cdFx0XHRhdXRvcGxheTogdHJ1ZSxcblx0XHRcdGFzTmF2Rm9yOiAnLnBlcnNvbidcblx0XHR9KTtcblx0fVxuXG5cblxuXHRpZigkKCcuZGF0ZXNfX2l0ZW0nKS5sZW5ndGggPiA1KSB7XG5cdFx0JCgnLmRhdGVzX193cmFwJykuc2xpY2soe1xuXHRcdFx0c2xpZGVzVG9TaG93OiA1LFxuXHRcdFx0c2xpZGVzVG9TY3JvbGw6IDEsXG5cdFx0XHRpbmZpbml0ZTogZmFsc2UsXG5cdFx0XHRmb2N1c09uU2VsZWN0OiB0cnVlLFxuXHRcdFx0YXNOYXZGb3I6ICcud2F0Y2hlcycsXG5cdFx0XHRyZXNwb25zaXZlOiBbe1xuXHRcdFx0XHRicmVha3BvaW50OiA5MDAsXG5cdFx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdFx0c2xpZGVzVG9TaG93OiA0XG5cdFx0XHRcdH1cblx0XHRcdH0sIHtcblx0XHRcdFx0YnJlYWtwb2ludDogODAwLFxuXHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdHNsaWRlc1RvU2hvdzogM1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB7XG5cdFx0XHRcdGJyZWFrcG9pbnQ6IDYwMCxcblx0XHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0XHRzbGlkZXNUb1Nob3c6IDJcblx0XHRcdFx0fSxcblx0XHRcdH0sIHtcblx0XHRcdFx0YnJlYWtwb2ludDogNDAwLFxuXHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdHNsaWRlc1RvU2hvdzogMVxuXHRcdFx0XHR9XG5cdFx0XHR9XVxuXHRcdH0pO1xuXHR9XG5cblx0JCgnLndhdGNoZXMnKS5zbGljayh7XG5cdFx0c2xpZGVzVG9TaG93OiAxLFxuXHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxuXHRcdGFycm93czogZmFsc2UsXG5cdFx0aW5maW5pdGU6IGZhbHNlLFxuXHRcdGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxuXHRcdGFzTmF2Rm9yOiAnLmRhdGVzX193cmFwJ1xuXHR9KTtcblxuXG5cdGlmKCQoJy5uZXdzX19pdGVtJykubGVuZ3RoID4gMykge1xuXHRcdCQoJy5uZXdzX19yb3cnKS5zbGljayh7XG5cdFx0XHRcdHNsaWRlc1RvU2hvdzogMyxcblx0XHRcdFx0c2xpZGVzVG9TY3JvbGw6IDEsXG5cdFx0XHRcdHJlc3BvbnNpdmU6IFt7XG5cdFx0XHRcdFx0YnJlYWtwb2ludDogODAwLFxuXHRcdFx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdFx0XHRzbGlkZXNUb1Nob3c6IDFcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1dXG5cdFx0fSk7XG5cdH07XG5cblx0JChcIi5idXJnZXItY29udGFpbmVyLTJcIikuY2xpY2soZnVuY3Rpb24oKSB7XG5cdCAgJCh0aGlzKS5maW5kKFwiLmJ1cmdlci0yXCIpLnRvZ2dsZUNsYXNzKFwiYnVyZ2VyLWFjdGl2ZS0yXCIpO1xuXHQgICQoJy5oZWFkZXIsIC5uYXYsIC50ZXN0JykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXHR9KTtcblxuXG5cdC8vICBtZW51IG1vYmlsZSBjbGljayB0b3VjaHN0YXJ0XG5cdCQoZG9jdW1lbnQpLm9uKCd0b3VjaHN0YXJ0ICcsIGZ1bmN0aW9uKGUpIHtcblx0XHQvLyBlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR2YXIgJG1lbnUgPSAkKCcubmF2X19pdGVtLmhhcy1zdWJuYXYnKTtcblx0XHR2YXIgJG5hdiA9ICQoJy5uYXYuaXMtYWN0aXZlJyk7XG5cdFx0dmFyICRjbG9zZUJ0biA9ICQoJy5tZW51LmlzLWFjdGl2ZScpO1xuXG5cdFx0aWYoJChkb2N1bWVudCkud2lkdGgoKSA8IDEwMjQpe1xuXG5cdFx0XHRpZiAoISRtZW51LmlzKGUudGFyZ2V0KSAmJiAkbWVudS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCAmJiAhJCgnLm1lbnUgKicpLmlzKGUudGFyZ2V0KSAmJiAhJCgnLm5hdiAqJykuaXMoZS50YXJnZXQpKSB7XG5cblx0XHRcdFx0dmFyIGl0ZW0gPSBlLnRhcmdldDtcblx0XHRcdFx0JG1lbnUucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG5cdFx0XHRcdCQoJy5oZWFkZXIsIC5uYXYnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG5cdFx0XHRcdCQoJy5idXJnZXItMicpLnJlbW92ZUNsYXNzKCdidXJnZXItYWN0aXZlLTInKTtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSBlLnRhcmdldDtcblxuXHRcdFx0XHRpZigkKGl0ZW0pLnBhcmVudCgnLmhhcy1zdWJuYXYnKS5oYXNDbGFzcygnaXMtYWN0aXZlJykgKSB7XG5cblx0XHRcdFx0XHQkKCcubmF2X19pdGVtJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXHRcdFx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcblx0XHRcdFx0XHRcdHNjcm9sbFRvcDogJChcIi5oZWFkZXJcIikub2Zmc2V0KCkudG9wIC0gMFxuXHRcdFx0XHRcdH0sIDgwMCk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkKCcubmF2X19pdGVtJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXHRcdFx0XHRcdCQoaXRlbSkucGFyZW50cygnLm5hdl9faXRlbScpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcblxuXHRcdFx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcblx0XHRcdFx0XHRcdHNjcm9sbFRvcDogJChcIi5oZWFkZXJcIikub2Zmc2V0KCkudG9wIC0gMFxuXHRcdFx0XHRcdH0sIDgwMCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0fSk7XG5cblxuXG5cdHZhciBzdGFydFRleHQgPSAnJztcblx0dmFyIGNvdW50ID0gMDtcblxuXHR2YXIgbW9yZUl0ZW0gPSAkKCcuanMtbW9yZScpLmRhdGEoJ3Nob3cnKTtcblx0dmFyIGFsbFRleHQgPSAkKCcuJyArIG1vcmVJdGVtICkudGV4dCgpO1xuXHR2YXIgc2hvcnRUZXh0ID0gYWxsVGV4dC5zcGxpdCgnICcsIDExMCkuam9pbignICcpO1xuXHQkKCcuJyArIG1vcmVJdGVtICkudGV4dChzaG9ydFRleHQpO1xuXG5cdCQoJy5qcy1tb3JlJykub24oJ2NsaWNrIHRvdWNoc3RhcnQgJywgZnVuY3Rpb24gKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYoY291bnQgPCAxKSB7XG5cdFx0XHRzdGFydFRleHQgPSBhbGxUZXh0O1xuXHRcdH1cblx0XHRjb3VudCs9MTtcblxuXHRcdCQoJy4nK21vcmVJdGVtKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG5cblx0XHRpZigkKCcuJysgbW9yZUl0ZW0gKS5oYXNDbGFzcygnaXMtYWN0aXZlJykpe1xuXHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnaXMtYWN0aXZlJykuaHRtbCgnPGkgY2xhc3M9XCJpY29uLWRvd25cIj48L2k+PHNwYW4+0KHQutGA0YvRgtGMPC9zcGFuPicpO1xuXHRcdFx0JCgnLicgKyBtb3JlSXRlbSApLnRleHQoc3RhcnRUZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJykuaHRtbCgnPGkgY2xhc3M9XCJpY29uLWRvd25cIj48L2k+PHNwYW4+0J/QvtC60LDQt9Cw0YLRjDwvc3Bhbj4nKTtcblx0XHRcdCQoJy4nICsgbW9yZUl0ZW0gKS50ZXh0KHNob3J0VGV4dCk7XG5cdFx0fVxuXHR9KTtcblxuXG5cblxuXHQvLyBpZigkKGRvY3VtZW50KS53aWR0aCgpID4gODAwKSB7XG5cdC8vIFx0dmFyIHMgPSBza3JvbGxyLmluaXQoKTtcblxuXHQvLyBcdC8vIFJlZnJlc2ggU2tyb2xsciBhZnRlciByZXNpemluZyBvdXIgc2VjdGlvbnNcblx0Ly8gXHRzLnJlZnJlc2goJCgnLnN0YXJ0c2NyZWVuLWJnLCAubWV0aG9kLWJnJykpO1xuXHQvLyB9XG5cblxuXHRpZigkKGRvY3VtZW50KS53aWR0aCgpIDwgMTAwMCkge1xuXG5cdFx0R2xvYmFsX21haW4udG91Y2hDYXJ1c2VsKHtcblx0XHRcdGl0ZW06ICcubGVhcm5fX3dyYXAnXG5cdFx0fSk7XG5cblx0XHRHbG9iYWxfbWFpbi50b3VjaENhcnVzZWwoe1xuXHRcdFx0aXRlbTogJy5iZW5lZml0X193cmFwJ1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdCQoJy5sZWFybl9fd3JhcCcpLnNsaWNrKCd1bnNsaWNrJyk7XG5cdFx0JCgnLmJlbmVmaXRfX3dyYXAnKS5zbGljaygndW5zbGljaycpO1xuXHR9XG5cblxufSk7XG5cblxuKGZ1bmN0aW9uKCQpe1xuICAkKHdpbmRvdykub24oXCJsb2FkXCIsZnVuY3Rpb24oKXtcbiAgICAkKFwiLndhdGNoZXNfX3NsaWRlclwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcbiAgICAgIGF4aXM6XCJ4XCIsXG4gICAgICB0aGVtZTpcImRhcmstM1wiLFxuICAgICAgc2Nyb2xsQnV0dG9uczogeyBlbmFibGU6IHRydWUgfVxuICAgIH0pO1xuICB9KTtcbn0pKGpRdWVyeSk7XG5cblxuJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xuXHRpZigkKGRvY3VtZW50KS53aWR0aCgpIDwgMTAwMCkge1xuXG5cdFx0R2xvYmFsX21haW4udG91Y2hDYXJ1c2VsKHtcblx0XHRcdGl0ZW06ICcubGVhcm5fX3dyYXAnXG5cdFx0fSk7XG5cblx0XHRHbG9iYWxfbWFpbi50b3VjaENhcnVzZWwoe1xuXHRcdFx0aXRlbTogJy5iZW5lZml0X193cmFwJ1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdCQoJy5sZWFybl9fd3JhcCcpLnNsaWNrKCd1bnNsaWNrJyk7XG5cdFx0JCgnLmJlbmVmaXRfX3dyYXAnKS5zbGljaygndW5zbGljaycpO1xuXHR9XG5cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21hcmt1cC9zdGF0aWMvanMvbWFpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=