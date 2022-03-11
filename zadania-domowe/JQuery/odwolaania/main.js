$(document).ready(function(){
    //Po id
   const section = $('#about');
   console.log(section);
   //Lub po klasie
   const listItems = $('.list-item');
   console.log(listItems);
   //PO nazwie znacznika
   const para = $('p');
   console.log(para);
   //Po selektorze pseudo klasy
   const elemenet_2_Items = $('.list-item:nth-of-type(2)');
   console.log(elemenet_2_Items);
   //Po atrybucie
    const links = $('a[title="See more"]');
    console.log(links);
    //Bardziej złożone Selektory
    //Potomstwa, bezpośredniego potomstwa, itd.
    const heading = $('section h2');
    console.log(heading);
    //MOżemy po istniejące elementy DOM
    const documentObj = $(document);
    console.log(documentObj);


});