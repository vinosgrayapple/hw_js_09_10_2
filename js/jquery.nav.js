$(function() {
        $('.dropdown').hover(
            function(){
                $(this).children('.sub-menu').slideDown(200);
                $('.sub-menu').animate({backgroundColor:"rgb(255,0,0)"}, 800 );
            },
            function(){
                $(this).children('.sub-menu').slideUp(200);
            }
        );
 }); 