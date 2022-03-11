/*
//Wywołanie jQuery dopiero po załadowaniu documentu
$(document).ready(function(){
    console.log($); 
    console.log('h1');
    console.log();
    $('h1').css('color','red').hide(1000).show(3000);
});
*/
/*
//Jak wyżej w sposób skrócony:
$(function(){
    console.log($());
    console.log('h1');
    console.log();
    $('h1').css('color','red').hide(1000).show(3000);
});
*/
console.log($());
console.log('h1');
console.log();
$('h1').css('color','red').hide(1000).show(3000);