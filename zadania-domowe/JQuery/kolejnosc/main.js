$(document).ready(function(){
    $("#wDol").click(function(){
        let firstElement = $("p:first");
        let lastElement = $("p:last");
            $( lastElement).insertBefore( firstElement );
    });
    $("#doGory").click(function(){
        let firstElement = $("p:first");
        let lastElement = $("p:last");
            $( firstElement ).insertBefore( lastElement );
    });
});
