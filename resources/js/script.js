$(document).ready(function () {

    // Current page tracking
    $('.js__nav-link').click(function () {
        $('.js__nav-link').removeClass("navbar__link--active");
        $(this).addClass("navbar__link--active");
    });

    // change navbar on scroll
    $('.js--section-about').waypoint(function (direction) {
        if (direction === "down") {
            $('.nav').addClass('navbar-light')
        } else {
            $('.nav').removeClass('navbar-light')
        }
    }, {
        offset: '60px'
    })

    //    Side menu 

    $('.js--toggle-menu').click(function () {
        console.log("clicked")
        $('.nav').toggleClass('nav__active')
    })

    // Close side menu

    $('#menucontainer').click(function (event) {
        event.stopPropagation();
        $('.nav').removeClass('nav__active')
    });


});