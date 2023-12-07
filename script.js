$(document).ready(function () {
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        const target = this.hash;
        const $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });

        // Mobile menu close on click
        if ($('.menu-items').hasClass('show')) {
            $('.menu-items').removeClass('show');
        }
    });

    // Mobile menu toggle
    $('#mobile-menu').on('click', function () {
        $('.menu-items').toggleClass('show');
    });
});
// Set the current year in the footer
const currentYear = new Date().getFullYear();
document.getElementById('current-year').innerText = currentYear;