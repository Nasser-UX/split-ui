$(function () {
    var heroSwiper = new Swiper(".heroSwiper", {
        pagination: {
            el: ".swiper-pagination",
        },
    });
    var propertiesSwiper = new Swiper(".properties-swiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        grabCursor: true,
        breakpoints: {
            400: {
                slidesPerView: 1,
                spaceBetween: 20,
            }, 
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            }, 
            990: {
                slidesPerView: 3,
                spaceBetween: 30,
            }, 
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            }, 
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var partnersSwiper = new Swiper(".partners-swiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        grabCursor: true,
        autoplay: true,
        breakpoints: {
            400: {
                slidesPerView: 1,
                spaceBetween: 20,
            }, 
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            }, 
            990: {
                slidesPerView: 3,
                spaceBetween: 30,
            }, 
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            }, 
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
})