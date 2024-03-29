$(document).ready(function () {
    // MENU HAMBURGER
    let hambMenu = document.querySelector('.hamburg_menu img');
    let mobMenu = document.querySelector('.mob_menu');
    hambMenu.addEventListener('click', function () {
        hambMenu.classList.toggle('rotate-menu');
        mobMenu.classList.toggle('db');
    });


    // SLIDER SLICK
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        slidesToShow: 2,
        // autoplay: true,
        autoplaySpeed: 6000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        centerMode: false,
        variableWidth: true,
        slidesToScroll: 2,
    });

    $('.slider-two').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: false,
        autoplaySpeed: 6000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        centerMode: true,
        // variableWidth: true,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});