$(document).ready(function () {
    $('.video-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
        autoplay: false,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev">&#10094;</button>', // left arrow
        nextArrow: '<button type="button" class="slick-next">&#10095;</button>'  // right arrow
    });
});
