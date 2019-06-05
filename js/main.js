
$(function(){

    var header = $('#header'),
        introH = $('#intro').innerHeight(),
        scrollOffset = 0;

        console.log(introH);

    $(window).on('scroll', function(){

        scrollOffset = $(this).scrollTop();

        console.log(scrollOffset);

    });

});

console.log("Hello world!");
