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
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
})