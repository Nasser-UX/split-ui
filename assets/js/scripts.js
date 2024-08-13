$(function () {
    var swiper = new Swiper(".services-list", {
        slidesPerView: 3,
        keyboard: {
            enabled: true,
        },
        grid: {
            rows: 3,
        },
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // start latest news slider
    var swiper = new Swiper(".latest-news-wrap", {
        slidesPerView: 4,
        spaceBetween: 15,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // start internal links slider
    var swiper = new Swiper(".internal-links-wrap", {
        slidesPerView: 1,
        spaceBetween: 15,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // active links on left aside 
    $('.left-links li').click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    $(".aside-search").click(function () {
        $(this).addClass("active").siblings().removeClass("active").children().removeClass("active");
        $(".search-popup").addClass("active");
    });

    $(".rate-portal").click(function () {
        $(this).addClass("active").siblings().removeClass("active").children().removeClass("active");
        $(".rate").addClass("active");
    });

    // dark light mode 

    $(".toggle-mode").click(function () {
        $("body").toggleClass("light-mode");
        $('.main-logo img').toggleClass("logo-light");

        var headerLogo = $('.main-logo img');

        if (headerLogo.hasClass("logo-light")) {
            headerLogo.attr("src", "/Style Library/psd-assets/images/logo-light.svg")
        } else {
            headerLogo.attr("src", "/Style Library/psd-assets/images/logo.svg")
        }
    });
});