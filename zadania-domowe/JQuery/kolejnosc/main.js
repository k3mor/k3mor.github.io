$(document).ready(function(){
    const firstElement = $("p:first");
    const lastElement = $("p:last");
    console.log(firstElement);
    console.log(lastElement);

    $("#wDol").click(function(){
        $(".para").each(function(){
            $( lastElement).insertBefore( firstElement );
        })
    });
    $("#doGory").click(function(){
        $(".para").each(function(){
            $( firstElement ).insertBefore( lastElement );
        });
    });

});
