$(document).ready(function(){
    const heading = $('h1');
    /*
    $('#hide').click(function(){
        heading.hide();
        //lub heading.hide(2000)
    });
    */
    $('#hide').click(function(){
        heading.hide(2000,function(){
           //aleet('element ukryty');
            heading.show(2000);
        });
        //lub heading.hide(2000)
    });
    //MOżna z drugim parametrem- funkcją:


    $('#show').click(function(){
        heading.show();
        // lub heading.show(2000);
    });

    $('#show-toggle').click(function(){
        heading.toggle(2000);
    });

    $('#fade-out').click(function(){
        heading.fadeOut(1500);
    });

    $('#fade-in').click(function(){
        heading.fadeIn(1500);
    });

    $('#fade-toggle').click(function(){
        heading.fadeToggle(1500);
    });

    //Slajdy 
    $('#slide-up').click(function(){
        heading.slideUp(1500);
    });
    $('#slide-down').click(function(){
        heading.slideDown(1500);
    });
    $('#slide-toggle').click(function(){
        heading.slideToggle(1500);
    });


});