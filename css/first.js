$(document).ready(function(){
    
    $('.angle').click(function(){
        
        $('.acord').slideToggle();
        $('.asid-list ul .angle i').toggleClass('rotat');       
    });
   
    $('.nav-2 p i:last-child').click(function(){
        
        
        $('.asid-navbar').toggleClass('asid-right'); 
        
        
    });
    $('.asid-logo .asid-cancel i').click(function(){
        
        
        $('.asid-navbar').toggleClass('asid-right'); 
        
        
    });
    $('.navbar-1 .nav-1 nav a').click(function(){
        
     $(this).addClass('act').siblings().removeClass('act')  ;             
    
    });
    // $('nav a.end').mouseenter(function(){
        
    //     $('.bloger').fadeIn();
        
    // });
    // $('nav a.end').mouseleave(function(){
        
    //     $('.bloger').fadeOut();
        
    // });
    // $('.bloger').mouseenter(function(){
        
    //     $('.bloger').fadeIn();
        
    // });
    // $('.bloger').mouseleave(function(){
        
    //     $('.bloger').fadeOut();
        
    // });
    $('.nav-2 p i:first-child').click(function(){
        
        $('.search').fadeToggle();
        $('.search').toggleClass('ser');
        
        
        
    });
    
    $('.search .can i').click(function(){
        
        $('.search').fadeToggle();
        
        
        
        
    });
    
    
    
    
//    
//    $("body").niceScroll();
    $('.pure').click(function(){
        
        $(this).addClass('icon-1').siblings().removeClass('icon-1');
        $('.pure .scan i').addClass('icon');
        $('.pure1 .scan i').removeClass('icon');
        $('.pure2 .scan i').removeClass('icon');
   
    $('.comp-imag-1 img').fadeOut();
        $('.pas').fadeIn();
        $('.comp-imag-2 img').fadeOut();
    
    });
    
    
    
    $('.pure1').click(function(){
        
        $(this).addClass('icon-1').siblings().removeClass('icon-1');
        $('.pure1 .scan i').addClass('icon');
        $('.pure .scan i').removeClass('icon');
        $('.pure2 .scan i').removeClass('icon');
    
        $('.comp-imag-1 img').fadeIn();
        $('.pas').fadeOut();
        $('.comp-imag-2 img').fadeOut();
    
    });
    $('.pure2').click(function(){
        
        $(this).addClass('icon-1').siblings().removeClass('icon-1');
        
        $('.pure2 .scan i').addClass('icon');
        $('.pure .scan i').removeClass('icon');
        $('.pure1 .scan i').removeClass('icon');
        
         $('.comp-imag-1 img').fadeOut();
        $('.pas').fadeOut();
        $('.comp-imag-2 img').fadeIn();
   
    
    });
    
    
    
    $('.timer').countTo();
    
    $('.price-1').click(function(){
        
        $(this).addClass('scal').siblings().removeClass('scal');
        
        
    });
     $('.price-2').click(function(){
        
        $(this).addClass('scal').siblings().removeClass('scal');
        
        
    });
     $('.price-3').click(function(){
        
        $(this).addClass('scal').siblings().removeClass('scal');
        
        
    });
    
    
     $(window).scroll(function(){

             if($(this).scrollTop() > 500){
                 $('.top').fadeIn();
             }
             else{
                 $('.top').fadeOut();
             }

         });
 
    
    
    
    
    
    
    
    
})