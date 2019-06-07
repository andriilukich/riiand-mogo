
$(function(){

    var header       = $('#header'),
        introH       = $('#intro').innerHeight() - 70,
        scrollOffset = $(window).scrollTop();

    // Fixed Header
    cheakScroll(scrollOffset);

    $(window).on('scroll', function(){

        scrollOffset = $(this).scrollTop();

        cheakScroll(scrollOffset);

    });

    function cheakScroll (scrollOffset) {

        if (scrollOffset >= introH) {
            header.addClass('header_fixed');
        } else {
            header.removeClass('header_fixed');
        }
    }

    // Smooth Scroll
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        var $this       = $(this),
            blockId     = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $('.nav__link').removeClass('active');
        $this.addClass('active');

        $('html, body').animate({
            scrollTop: blockOffset - $('#header').height()
        }, 1000);
    });

    // Menu nav toggle
    $('#nav_toggle').on('click', function(event) {
        event.preventDefault();

        $(this).toggleClass('nav-toggle_active');
        $('#nav').toggleClass('nav_active');
    });

        // Hide menu on clike nav__link
    $('.nav__link').on('click', function(event) {
        event.preventDefault();

        $('#nav').removeClass('nav_active');
        $('#nav_toggle').removeClass('nav-toggle_active');
    });

    // Collapse
    $('.accordion__header').click(function(event) {
        event.preventDefault();
    
        var $this = $(this);
        
        if ($this.next().hasClass('accordion_active')) {
            $this.next().removeClass('accordion_active');
            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find('.accordion__content').removeClass('accordion_active');
            $this.parent().parent().find('.accordion__content').slideUp(350);
            $this.next().toggleClass('accordion_active');
            $this.next().slideToggle(350);
        }
    });

    // Reviews slider  
    $('.slider__wrapper').slick({
        fade: true, 
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
});