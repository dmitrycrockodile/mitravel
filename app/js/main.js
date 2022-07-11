const burger = document.querySelector('.burger');
const close = document.querySelector('.menu__close');
const menu = document.querySelector('.menu');
const swiper1 = document.querySelector('.slider-container');
const swiper2 = document.querySelector('.swiper-container');
const playButtonsFirts = document.querySelectorAll('.main-slider__play');

burger.addEventListener('click', () => {
    menu.classList.add('menu--visible');
});

close.addEventListener('click', () => {
    menu.classList.remove('menu--visible')
})

let swiperSlider1 = new Swiper(swiper1, {
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 90
});

let swiperSlider2 = new Swiper(swiper2, {
	centeredSlides: true,
	slidesPerView: 1,
	loop: true,
	spaceBetween: 10,
    fadeEffect: {
        crossFade: true
    },
    effect: "fade",
    navigation: {
        nextEl: '.first__slider-btn--right',
        prevEl: '.first__slider-btn--left',
    }
});

swiperSlider2.on('transitionEnd', function () {
	let videos = document.querySelectorAll('.first__slider video');
	videos.forEach((el) => {
		el.pause();
		el.currentTime = 0;
	});
	playButtonsFirts.forEach((el) => {
		el.style.display = 'block';
	});
});

playButtonsFirts.forEach((el) => {
    el.addEventListener('click', (e) => {
        let video = e.currentTarget.closest('.main-slider__media').querySelector('video');
        video.play();
        e.currentTarget.style.display = 'none';
        setTimeout(() => {
            video.volume = 0.5;
        }, 1000)
    });
});