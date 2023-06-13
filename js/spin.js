$(function () {
    var wheel = document.querySelector('.wheel-img');
    var resultWrapper = document.querySelector('.spin-result-wrapper');
    $('.cursor-text').click(function () {
        if (wheel.classList.contains('rotated')) {
            resultWrapper.style.display = "block";
        } else {
            wheel.classList.add('super-rotation');
            setTimeout(function () {
                resultWrapper.style.display = "block";
            }, 8000);
            setTimeout(function () {
                $('.spin-wrapper').slideUp();
                $('.order_block').slideDown();
                start_timer();
            }, 10000);
            wheel.classList.add('rotated');
        }
    });

    $('.close-popup, .pop-up-button').click(function (e) {
        e.preventDefault();
        $('.spin-result-wrapper').fadeOut();
        var top = $('.toform').offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 800);
    });

    function start_timer() {
        new Timer({
            hour: '#hour',
            min: '#min',
            sec: '#sec' ,
            hourRes: '#hour',
            minRes: '#min',
            secRes: '#sec' ,
        })
        const $timer = $('.timer');
        $timer.addClass('timer--show');
        $('.links').css({paddingBottom: ($timer.outerHeight() * 1.3) + 'px'});
    }

    $('[href^="#"], [data-href]').on('click', function (e) {
        e.preventDefault();
        const target = $(this).attr('href') || $(this).data('href')
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800)
    })
})