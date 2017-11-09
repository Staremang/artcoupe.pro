
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
if (typeof(jQuery) !== "undefined") {
	$(document).ready(function () {
		
		if (0 !== $("#map").length) {
			var t = new google.maps.LatLng(addr[0],addr[1])
			  , e = t
			  , i = {
				zoom: 17,
				center: t,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				draggable: !0,
				scrollwheel: !0,
				disableDefaultUI: !0
			}
			  , n = new google.maps.Map(document.getElementById("map"),i)
			  , s = "img/pin.png";
			new google.maps.Marker({
				position: e,
				icon: s,
				map: n
			})
		}
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
		
		
		
		if (document.documentElement.clientWidth < 960) {
			document.querySelectorAll('.article-block').forEach(function (item) {
				if (!item.classList.contains('article-block_no-spoler')) {
					item.setAttribute('data-spoler', 'close');
				}
			})
			$('.article-block__btn').click(function () {
				if ($(this).hasClass('article-block_no-spoler')) {
					return 0;
				}
				var block = $(this).parents('.article-block'),
					tr = block.attr('data-spoler');

				if (tr != 'close') {
					block.attr('data-spoler', 'close');
					$(this).html('Развернуть');
				} else {
					block.attr('data-spoler', 'open');
					$(this).html('Свернуть');
				}
			})
		}
		
		if ($().owlCarousel) {
			$('.last-works-slider').addClass('owl-carousel owl-carousel_no-dots owl-theme');
			$('.last-works-slider').owlCarousel({
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
			
			
//			$('.article-carousel').owlCarousel({
//				loop:true,
//				nav:true,
//				navText: [ '<img src="img/arrow-left-g.svg" alt="left">', '<img src="img/arrow-right-g.svg" alt="right">' ],
//				items: 3,
//				responsive : {
//					0 : {
//						items: 1,
//						margin: 20,
//					},
//					768 : {
//						items: 2,
//					},
//					960 : {
//						items: 4,
//						margin: 20,
//					}
//				}
//			});
//			$('.section-main-partners__carousel').owlCarousel({
//				loop:true,
//				nav:true,
//				navText: [ '<img src="img/arrow-left.svg" alt="left">', '<img src="img/arrow-right.svg" alt="right">' ],
//				items: 3,
////				autoWidth:true,
////				center:true,
////				autoWidth:true,
////				slideBy: 6,
////				margin: 20,
//		//		autoplay:true,
//		//		autoplayTimeout:5000,
//		//		autoplayHoverPause:true
//				responsive : {
//					0 : {
//						items: 1,
////						margin: 60,
//					},
//					768 : {
//						items: 2,
//					},
//					960 : {
//						items: 4,
//						margin: 81,
//					}
//				}
//			});
//			$('.section-main-reviews__carousel').owlCarousel({
//				loop:true,
//				nav:true,
//				navText: [ '<img src="img/arrow-left-g.svg" alt="left">', '<img src="img/arrow-right-g.svg" alt="right">' ],
//				items: 1,
////				autoWidth:true,
//				center:true,
//				autoHeight:true
////				autoWidth:true,
////				slideBy: 6,
////				margin: 20,
//		//		autoplay:true,
//		//		autoplayTimeout:5000,
//		//		autoplayHoverPause:true
//			})
		}
	})
	
}