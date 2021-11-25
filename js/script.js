$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        slidesToShow: 2,
        autoplay: false,
        // autoplaySpeed: 6000,
        // pauseOnFocus: true,
        // pauseOnHover: true,
        // pauseOnDotsHover: true,
        centerMode: true,
        variableWidth: true,
    });
});