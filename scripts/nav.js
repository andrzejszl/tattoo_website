$('nav.desktop a').on('click', function () {
    const $goToSection = "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: ($($goToSection).offset().top - 70)
    })
})

$('nav.switch a').on('click', function () {
    const $goToSection = "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $($goToSection).offset().top
    })
})