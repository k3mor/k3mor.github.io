/*
var sumKa = function(){
    $(document).ready(function(){
    let wyplata = 0;
    $('.salary').each(function(){
        wyplata += parseInt($(this).text());
        return wyplata;
   });
   console.log(wyplata);
});
}
*/
$('#count-sum').click(function() {
    $(document).ready(function(){
        let wyplata = 0;
        $('.salary').each(function(){
            wyplata += parseInt($(this).text());
            return wyplata;
       });
       $('#sum').html(wyplata)
       //console.log(wyplata);
    });
});