import "./import/modules";
import Swiper from 'swiper';

(function() {

	// Check supported WEBP
	(function() {
		Modernizr.on('webp', function(result) {
			const introBlock = document.querySelector('.intro');
			if (result) {
				if(introBlock) {
					introBlock.classList.add('intro--webp')
				}
			} else {
				if(introBlock) {
					introBlock.classlist.add('intro--no-webp')
				}

			}
		});
	})();

	(function initPostSlider(){
		const galleryThumbs = new Swiper('.post__gallery-thumbs', {
			spaceBetween: 10,
			slidesPerView: 4,
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		});
		const galleryTop = new Swiper('.post__gallery', {
			spaceBetween: 10,
			navigation: {
				nextEl: '.post__gallery-next',
				prevEl: '.post__gallery-prev',
			},
			thumbs: {
				swiper: galleryThumbs
			}
		});
	})();

	(function fixMenu() {
		const btn = document.querySelector('.header__menu');
		const menu = document.querySelector('.mmenu');
		
		document.addEventListener('click', function(event) {
			let isClickInsideMenu = menu.contains(event.target);
			let isClickOnBurger = btn.contains(event.target);

			if (!isClickInsideMenu && menu.classList.contains('mmenu--open')) {
				menu.classList.remove('mmenu--open');
			} else if (isClickOnBurger && menu.classList.contains('mmenu--open') == false) {
				menu.classList.add('mmenu--open');
			} else {
				return
			}
		});
	})();
})();