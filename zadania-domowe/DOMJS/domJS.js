//Object WINDOW
// window.alert("Hello World!");
// window.prompt("Podaj swój wiek:");
//let mojwiek = window.prompt("Podaj swój wiek:");
// document.write(mojwiek);
// console.log(`Mam ${mojwiek} lat!`);
/*
let accept = window.confirm("Akceptuje umowę");
if(accept){
    console.log(`Umowa zaakceptowana`);
}else{console.log(`Umowa nie zaakceptowana`)};
*/
/*
//Wyświetlimy wenętrznbą wysokość przeglądarki
console.log("Wysokość wew przeg wynosi: " + window.innerHeight);
console.log(`Wysokość wew przeg wynosi: " ${window.innerHeight}`);

console.log("Wysokość zew  przeg wynosi: " + window.outerHeight);
console.log(`Wysokość zew przeg wynosi: " ${window.outerHeight}`);

window.document.write('<h2>Hello World</h2>');

//Obiekt window reprezentuje przeglądarkę wszystko w środku to jego pola
//np: zmienna globalna:
var number = 10;
console.log(window);

//Document object
console.log(window.document);
console.log(document);
console.log(document.location);
console.log(document.doctype);
console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.getElementsByTagName(`body`));
console.log(document.documentElement);//pole tylko do odczytu, obiekt ypu element
console.log(document);//pole obiektu window i reprezentuje cały dokument html
//Metody pojedyncze
let articles = document.getElementById('articles');
console.log(articles);
let paragraf = document.querySelector('.content');//Pierwszy z elementów
console.log(paragraf);
//Metody zwracające kolekcje - HTMLCollection
let paragrafs=document.getElementsByClassName('content');//NIe ma kropki
console.log(paragrafs);
console.log(paragrafs[0]);
let allParagrafs=document.getElementsByTagName('p');
console.log(allParagrafs);//Znajduje wszystkie elementy i zwraca w formie kolekcji
let paragrafsContent=document.querySelectorAll('p.content');
console.log(paragrafsContent);
*/

