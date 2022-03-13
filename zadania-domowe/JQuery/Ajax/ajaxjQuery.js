/*
$(document).ready(function(){
    //obsługuje wszystkie metody, błędy, itd.
    $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users/1',
            statusCode: {
                200: function(){
                    console.log("200 OK");
                }
            },
            success: function(data){
                console.log(data);
                console.log(data.name);
                console.log(data.email);
            },
            error: function(error){
                console.error(error);
            }
    });
});
*/
$(document).ready(function(){
    //obsługuje wszystkie metody, błędy, itd.
    $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users/1',
            statusCode: {
                200: function(){
                    console.log("200 OK");
                }
            },
    })
    .done(function(data){
        console.log(data);
        console.log(data.name);
        console.log(data.email);
    })
    .faile(function(error){
        console.error(error);
    });
});