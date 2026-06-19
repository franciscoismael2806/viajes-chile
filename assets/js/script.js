// =========================
// VIAJES CHILE
// Interacciones JS + jQuery
// =========================

document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(function (elemento) {
        new bootstrap.Tooltip(elemento);
    });

    const carousel = document.querySelector('#carouselViajes');
    if (carousel) {
        new bootstrap.Carousel(carousel, {
            interval: 3500,
            ride: 'carousel',
            pause: false
        });
    }
});

$(document).ready(function () {
    $('.navbar a').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            const destino = $(this.hash).offset().top - 60;

            $('html, body').animate(
                {
                    scrollTop: destino
                },
                800
            );
        }
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.navbar-viajes').addClass('scrolled');
        } else {
            $('.navbar-viajes').removeClass('scrolled');
        }
    });

    $('#btn-enviar').on('click', function () {
        alert('Tu mensaje fue enviado correctamente.');
    });
});