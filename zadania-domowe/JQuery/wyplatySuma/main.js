var sumKa = function(){
    $(document).ready(function(){
    var wyplata = 0;
    $('.salary').each(function(){
        wyplata += parseInt($(this).text());
        return wyplata;
   });
   console.log(wyplata);
});
}
