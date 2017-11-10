(function( $ ) {
	$.fn.lastWorks = function() {


		var navBtnPrev 		= this.find('.last-works-open__nav-prev'),
			navBtnNext 		= this.find('.last-works-open__nav-next'),
			openImg 		= this.find('.last-works-open__full'),
			stage 			= this.find('.last-works-open__stage'),
			stageOuter  	= this.find('.last-works-open__preview-container'),
			firstPreview 	= this.find('.last-works-open__preview-item').first();


		var height 			= stage.height(),
			outHeight 		= stageOuter.height(),
			marginBottom 	= height - outHeight;
			marginTop 		= 0,

		firstPreview.addClass('active');
		openImg.html('<a data-fancybox="gallery" href="' + firstPreview.attr('href') + '"><img src="' + firstPreview.attr('href') + '" alt=""></a>');


		navBtnPrev.addClass('disable');

		stage.css({
			'transform': 'translate3d(0px, ' + marginTop + 'px, 0px)',
			'transition': 'transform .3s ease'
		});
		navBtnNext.unbind('click');
		navBtnNext.click(function () {
			if (marginBottom > 0 && marginBottom >= outHeight) {
				marginTop -= (outHeight + 22);
				marginBottom -= (outHeight + 22);
			} else if (marginBottom > 0 && marginBottom < outHeight) {
				marginTop -= marginBottom;
				marginBottom = 0;
				$(this).addClass('disable');
			}
			navBtnPrev.removeClass('disable');
			stage.css('transform', 'translate3d(0px, ' + marginTop + 'px, 0px)');
		});

		navBtnPrev.unbind('click');
		navBtnPrev.click(function () {

			if (marginTop < 0 && (-marginTop) >= outHeight) {
				marginTop += (outHeight + 22);
				marginBottom -= (outHeight + 22);
			} else if (marginTop < 0 && (-marginTop) < outHeight) {
				marginBottom = -marginTop;
				marginTop = 0;
				$(this).addClass('disable');
			}
			navBtnNext.removeClass('disable');
			stage.css('transform', 'translate3d(0px, ' + marginTop + 'px, 0px)');
		});
	};
})(jQuery);


if (document.querySelector('.btn-up')) {
	window.onscroll = function() {
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if (scrolled > 500) {
			document.querySelector('.btn-up').classList.add('view');
		} else {
			document.querySelector('.btn-up').classList.remove('view');
		}
	}
}
		
function initMap () {
	if ($("#map").length !== 0) {
		var center = new google.maps.LatLng(addr[0],addr[1]);

		var map = new google.maps.Map(document.getElementById('map'), {
			center: center,
			zoom: 17,
			disableDefaultUI: true
		});

		new google.maps.Marker({
			position: center,
			icon: "img/pin.png",
			map: map
		})

		// var t = new google.maps.LatLng(addr[0],addr[1])
		//   , e = t
		//   , n = new google.maps.Map(document.getElementById("map"), i)
		//   , s = "img/pin.png"
		//   , i = {
		// 	zoom: 17,
		// 	center: t,
		// 	mapTypeId: google.maps.MapTypeId.ROADMAP,
		// 	draggable: true,
		// 	scrollwheel: true,
		// 	disableDefaultUI: true
		// };

		// new google.maps.Marker({
		// 	position: e,
		// 	icon: s,
		// 	map: n
		// })
	}
}


// google.maps.event.addDomListener(window, "load", initMap);

if (typeof(jQuery) !== "undefined") {
	$(document).ready(function () {
//		Parallax.DEFAULTS.mirrorSelector = '.wrapper';

		var header = $('.header__bottom');
		$('.header__menu-btn').click(function () {
			if (header.hasClass('open')) {
				header.css('height', '');
				header.removeClass('open');
			} else {
				header.css('height', $('.header__nav').height());
				header.addClass('open');
			}
		})
		
		$('.btn-up').click(function (e) {
			e.preventDefault();
			$('html, body').animate({scrollTop: 0}, 'slow');
		})
		
		
		
		
		///// new 
		$('.about__btn-more').click(function () {
			$('.about').addClass('show');
		})
		
		if (typeof $.fn.owlCarousel  !== 'undefined') {

			var worksSlider = $('.last-works-slider'),
				openWorkIndex = 0,
				open = false;

			$('.slider-filter-open__btn-close').click(function () {
				open = false;
				$('.slider-filter-open.active').removeClass('active');
				$('.last-works-slider__slider-item.active').removeClass('active');
			})

			$('.last-works-open__preview-item').click(function (e) {
				e.preventDefault();
				$('.last-works-open__preview-item').removeClass('active');
				$(this).addClass('active');
				$('.slider-filter-open.active').find('.last-works-open__full').html('<a data-fancybox="gallery" href="' + $(this).attr('href') + '"><img src="' + $(this).attr('href') + '" alt=""></a>');
			})

			$('.last-works-slider__slider-item').click(function () {
				open = true;
				$('.last-works-slider__slider-item').removeClass('active');
				$(this).addClass('active');
				$('.slider-filter-open').removeClass('active');
				$('.slider-filter-open[data-last-work="' + $(this).attr('data-last-work') + '"]').addClass('active');

				// if (document.documentElement.clientWidth >= 768) {
					$('.slider-filter-open[data-last-work="' + $(this).attr('data-last-work') + '"]').lastWorks();
				// }
				openWorkIndex = Number($(this).attr('data-last-work'));
			})

			worksSlider.addClass('owl-carousel owl-carousel_no-dots owl-theme');
			worksSlider.owlCarousel({
				loop: true,
				nav: true,
				navText: [ '<img src="img/arrow-left-1.png" alt="left">', '<img src="img/arrow-right-1.png" alt="right">' ],
				items: 3,
				autoWidth:true,
				center:true,
				responsive : {
					0 : {
						items: 1,
						margin: 20,
					},
					768 : {
						items: 2,
					},
					960 : {
						items: 3,
						margin: 40,
					}
				}
			})
			
			worksSlider.on('changed.owl.carousel initialized.owl.carousel', function(event) {
				var owlItems  = event.item.count,
					item      = event.item.index,
					calcItem  = Math.floor(item - (event.item.count / 2) + 1);
				
				if (calcItem === 0) {
					calcItem = owlItems;
				}
				if (calcItem > owlItems) {
					calcItem = 1;
				}
				openWorkIndex = calcItem;

				if (open) {
					$('.last-works-slider__slider-item').removeClass('active');
					$('.last-works-slider__slider-item[data-last-work="' + calcItem + '"]').addClass('active');
					$('.slider-filter-open').removeClass('active');
					$('.slider-filter-open[data-last-work="' + calcItem + '"]').addClass('active');
					$('.slider-filter-open[data-last-work="' + calcItem + '"]').lastWorks();
				}

			});

			$('.slider-filter-open__btn-prev').click(function() {
				worksSlider.trigger('prev.owl.carousel');

			})
			$('.slider-filter-open__btn-next').click(function() {
				worksSlider.trigger('next.owl.carousel');

			})
		}

//		if (document.documentElement.clientWidth < 960) {
//			document.querySelectorAll('.article-block').forEach(function (item) {
//				if (!item.classList.contains('article-block_no-spoler')) {
//					item.setAttribute('data-spoler', 'close');
//				}
//			})
//			$('.article-block__btn').click(function () {
//				if ($(this).hasClass('article-block_no-spoler')) {
//					return 0;
//				}
//				var block = $(this).parents('.article-block'),
//					tr = block.attr('data-spoler');
//
//				if (tr != 'close') {
//					block.attr('data-spoler', 'close');
//					$(this).html('Развернуть');
//				} else {
//					block.attr('data-spoler', 'open');
//					$(this).html('Свернуть');
//				}
//			})
//		}
		
		if (typeof $.fn.owlCarousel  !== 'undefined') {
			if (document.documentElement.clientWidth < 768) {
				
				$('.last-works-open__stage').addClass('owl-carousel owl-carousel_no-dots owl-theme');
				$('.last-works-open__stage').owlCarousel({
					loop: true,
					nav: false,
//					navText: [ '<img src="img/arrow-left-1.png" alt="left">', '<img src="img/arrow-right-1.png" alt="right">' ],
					items: 3,
					autoWidth:true,
					center:true,
//					responsive : {
//						0 : {
//							items: 1,
//							margin: 20,
//						},
//						768 : {
//							items: 2,
//						},
//						960 : {
//							items: 3,
//							margin: 40,
//						}
//					}
				})
			}


			$('.materials-slider').addClass('owl-carousel owl-carousel_no-dots owl-theme');
			$('.materials-slider').owlCarousel({
				loop: true,
				nav: true,
				navText: [ '<img src="img/arrow-left-1.png" alt="left">', '<img src="img/arrow-right-1.png" alt="right">' ],
				items: 3,
				autoWidth:true, 
				center:true,
				responsive : {
					0 : {
						items: 1,
						margin: 20,
					},
					768 : {
						items: 2,
					},
					960 : {
						items: 5,
						margin: 45,
					}
				}
			})
			$('.popular-slider').addClass('owl-carousel owl-theme');
			$('.popular-slider').owlCarousel({
				loop:true,
				nav:true,
				navText: [ '<img src="img/arrow-left-2.svg" alt="left">', '<img src="img/arrow-right-2.svg" alt="right">' ],
				items: 1,
//				autoWidth:true,
//				center:true,
				autoHeight:true
//				autoWidth:true,
//				slideBy: 6,
//				margin: 20,
		//		autoplay:true,
		//		autoplayTimeout:5000,
		//		autoplayHoverPause:true
			})
			
			
		}
	})
	
}