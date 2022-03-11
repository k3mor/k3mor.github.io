$(document).ready(function(){
    //console.log('działa');
    $('.hamburger').click(function(){
        $('.main-menu').toggleClass('open');
    });

    $('.main-menu-item a').click(function(e){
        e.preventDefault();
        //console.log('klik klik');

        //Wygaszamy wszystko co mamy
        //oraz przeładowanie
        //dokazdego linku/adresu
        /* Do jednego adresu
        $('body').fadeOut(2000,function(){
            window.location.href='https://wp.pl';
        });
        */
        $('body').fadeOut(2000,function(){
            window.location.href=$(e.target).attr('href');
        });
        
    })

});