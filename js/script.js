$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass("fa-times-circle");
        $('header').toggleClass('toggle');
    })

    $(window).on('scroll load',function(){

        $('#menu').removeClass("fa-times-circle");
        $('header').removeClass('toggle');

    });
});