$(function() {
        $('.dropdown').hover(
            function(){
                $(this).children('.sub-menu').stop().slideDown(200);
            },
            function(){
                $(this).children('.sub-menu').stop().slideUp(200);
            }
        );
        $(".sub-menu").hover(function() {
        	$(this).animate({backgroundColor:"#800000"}, 600 );
        }, function() {
        	$(this).animate({backgroundColor:"rgb(225,75,75)"}, 600 );

        });
 }); 
