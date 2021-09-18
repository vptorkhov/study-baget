var swiper = new Swiper(".mainSwiper", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
var swiper = new Swiper(".examplesSwiper", {
	slidesPerView: 2,
	spaceBetween: 0,
	slidesPerGroup: 3,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		992: {
			spaceBetween: 20,
			slidesPerView: 2
		},
		1400: {
			spaceBetween: 30,
			slidesPerView: 3
		}
	}
});
var swiper = new Swiper(".specSwiper", {
	slidesPerView: 2,
	spaceBetween: 0,
	slidesPerGroup: 3,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		992: {
			spaceBetween: 20,
			slidesPerView: 2
		},
		1400: {
			spaceBetween: 30,
			slidesPerView: 3
		}
	}
});

var mainSlider = document.querySelectorAll('.main-slider');
for (var i=0; i<mainSlider.length;i++){
	mainSlider[i].style.display="block";
}
var exampleSlider = document.querySelectorAll('.examples');
for (var i=0; i<exampleSlider.length;i++){
	exampleSlider[i].style.display="block";
}
