//Dane mogą być pobierane yylko w formacie JSON
$(document).ready(function(){
    $.getJSON('https://jsonplaceholder.typicode.com/users/1',function(data){
        console.log(data);
        console.log(data.name);
        console.log(data.email);
    });
    //Z jednym elementm ale w formacie jqXHR
    $.getJSON('https://jsonplaceholder.typicode.com/users/1')
    .done(function(data){
        console.log(data);
        console.log("Jeden arg: " + data.name);
        console.log("Jeden arg: " + data.email);
    })
    .fail(function(error){
        console.log(error);
    })
});