$(document).ready(function() {
    $.get('https://jsonplaceholder.typicode.com/users/1',function(data){
        console.log(data);
        console.log(data.name);
        console.log(data.email);
    });
    //Inna metoda GET z jednym parametrem, zostaje
//zwrócony obiekt typu jqXHR
$.get('https://jsonplaceholder.typicode.com/users/1').done(function(data){
    console.log(data);
        console.log("GET: " + data.name);
        console.log("GET: " + data.email);
})
    .fail(function(error){
        console.loge(error);
    })
});

