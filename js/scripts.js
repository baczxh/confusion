$(document).ready(function(){
            $("#myCarousel").carousel({interval:2000});
            $("#carousel-button").click(function(){
                 if($('#carousel-button').children('span').hasClass('fa-pause')){
                     $("#myCarousel").carousel('pause');
                     $('#carousel-button').children('span').removeClass('fa-pause');
                     $('#carousel-button').children('span').addClass('fa-play');
                 }
                 else{
                     $("#myCarousel").carousel('cycle');
                     $('#carousel-button').children('span').removeClass('fa-play');
                     $('#carousel-button').children('span').addClass('fa-pause');
                 }
                 
            });
            $("#btnreserve").click(function(){
                $("#reserveModal").modal();
                   
            });
            $("#loginlink").click(function(){
                $("#loginModal").modal();
            });
            
        });