$(document).ready(function(){
    $('#get-data').click(function(){
        $.getJSON(' https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .done(function(data){
            
            let Imie = $('<p></p>').text(`Imie:  ${data.imie}`);
            let Nazwisko = $('<p></p>').text(`Nazwisko:  ${data.nazwisko}`);
            let Zawod = $('<p></p>').text(`Title ${data.zawod}`);
            let Firma = $('<p></p>').text(`Firma:  ${data.firma}`);
            let stars = $('<p>***********************</p>')
            
            let jqBody = $('body');
            jqBody.append(Imie);
            
            jqBody.append(Nazwisko);
            jqBody.append(Zawod);
            jqBody.append(Firma);
            jqBody.append(stars);
            
        })
        .fail(function(error){
        });        
    });
});

