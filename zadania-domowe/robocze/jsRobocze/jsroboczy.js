/* Function start */
function aboutMe(){
    console.log("My name is Roman - 1.");
}
aboutMe();
/* Wyrażenie funkcyjne  - funkcja anonimowa*/
const mojaFunkcja1 = function(){
    console.log("My name is Roman - 2.");
}
mojaFunkcja1();
/* Uwaga na HOisting przy funkcjach - można wczesniej wywołać */
/* Uwga na Hoisting przy wyrażeniach funkcyjnych - nie działa.  */
/* Funkcja z parametrem - parametr DOMYŚLNY, na TWARDO */
function myName2a(name="Romeczek"){
    console.log(`My name is ${name}`);
    console.log(`Welcom ${name}`);
}
myName2a();

/* Funkcja z parametrami */
function myName2(name){
    console.log(`My name is ${name}`);
    console.log(`Welcom ${name}`);
}
myName2("Roman");
myName2("David");

/* Funkcja z dodawaniem */
const dodawanie1 = function (let1=0, let2=0){
    let wynik = let1 + let2;
    console.log("Suma zmiennych wynosi: " + wynik);
}
dodawanie1();
dodawanie1(10);
dodawanie1(0,10)
dodawanie1(10,100);
/*Jak wyżej ale ze zmiennymi zewnętrznymi*/
let a = 9;
let b = 7;
const dodawanie2 = function (let1=0, let2=0){
    let wynik = let1 + let2;
    console.log("Suma zmiennych wynosi: " + wynik);
}
dodawanie2(a,b);
/* Funkce ze zwróceniem */
const dodawanieZwrot = function(l1,l2){
    let sumka = l1 + l2;
    return sumka;
}
console.log(dodawanie2(1,2));
let wynikDodawania = 0;
wynikDodawania = dodawanieZwrot(20,200);
console.log(wynikDodawania);

/* Funkcja strzałkowa */
const kwadrat1 = function(x){
    return x*x;
}
console.log(kwadrat1(2));
/* Zamian na funkcję strzałkową  */
const kwadrat2 = (y) => {
    return y*y;
}
console.log(kwadrat2(3));
/* Gdy jest tylko jeden parametr, mozna nawet: */
const kwadrat3 = z => { return z*z; }
console.log(kwadrat3(4));
/* Można jeszcze mniej, return jest domyślnie */
/* Gdy jest tylko jeden parametr, mozna nawet: */
const kwadrat4 = u => u*u;
console.log(kwadrat4(5));
/* Przykłąd z Tablicą */['Ania','Bartek','Czarek'].forEach(function(item){
    console.log(item);
});
/* Wersja skrócona */
['Darek','Franek','Gerard'].forEach(item2 => console.log(item2));
console.log("******************");
/* *************** */
/* Tablice */
/* Są typem referencyjnym wskaźnikowym*/
let imiona = ['Jolka','Zenek','Gridget'];
console.log(imiona);
console.log(imiona[0]);
console.log(imiona[1]);
console.log(imiona[2]);
console.log("Długość tablicy: "+imiona.length);
/* Destrukturyzacja tablicy, przypisujemy wskaźnik do tej tablicy */

let imionaPracowników=['Franek','Maniek','Adrian'];
let [imiePracownika1,imiePracownika2,imiePracownika3] = imionaPracowników;
console.log(imiePracownika1);
console.log(imiePracownika2);
console.log(imiePracownika3);
/* Metody na tablicach */
let names=['Franek','Maniek','Adrian'];
let dlTab = names.push('Roman');//Wstawia na koniec
console.log(names);
console.log(names.length);
console.log(names.join());//Łączenie elementów tablicy
console.log(names.join(""));//Łączenie elementów tablicy tab4 wynosi
console.log(names.join("-"));//Łączenie elementów tablicy
console.log(names.reverse());//Odwrócenie tablicy
let names2=['Franek','Maniek','Adrian'];
let reverseTab = names2.reverse();
console.log(reverseTab);//Odwrócenie ze zmienną
console.log(names.reverse());
console.log(names.reverse());//Do poprzedniej tablicy
console.log(names2.sort());//Sortowanie
/* Concat - łąćzenie tablic */
let tabA = ['A','B','C'];
let tabB = ['a','b','c'];
let laczTab = tabA.concat(tabB);//Będzie nowa tablica
console.log(laczTab);
/* Łączdenie typu obiektowego */
let kobiety = [];
let kobiety1 = new Array('Asia','Basia','Kasia');
//console.log(kobiety1);
let kobiety2 = new Array('Zosia','Tosia','Lola');
//console.log(kobiety2);
let zlaczBaby = kobiety.concat(kobiety1, kobiety2);
console.log(zlaczBaby);
/* lub */
let zlaczBaby2 = kobiety1.concat(kobiety2);
console.log(zlaczBaby2);
/* Zwaracanie numeru idex */
let persons = ['Person1','Person2','Person3'];
console.log(persons.indexOf('Person1'));
let numerIndex0 = persons.indexOf('Person1');
console.log(numerIndex0);

console.log(persons.indexOf('Person2'));
let numerIndex1 = persons.indexOf('Person2');
console.log(numerIndex1);
/*Metoda MAP - nowa tablica poprzez modyfikacja nowych elementów*/
let personsX = ['Person1','Person2','Person3'];
let zmapuj1 = personsX.map(function(item, index){
    let newItem = item.toUpperCase() + ' index - ' + index;
    return newItem;
});
console.log(zmapuj1);//Tworzymy nowy element
console.log(personsX);
/* Metoda filtrująca, powstaje nowa tablica */
let personsY = ['Person1y','Derson2y','Person3y'];
let filtr1 = personsY.filter (item => item.startsWith('Pe')) ;
console.log(filtr1);
/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  */
/* Object - reference types */
/* ES 5 */
var person = {
    imie: "Roman",
    wzrost: 186,
    print: function() {
        console.log(this.imie, this.wzrost);
    },
   printThis: function(){
        console.log("To jest metoda obiektu 'printThis' i zaraz zostanie uruchomiona ");
        this.print();
    }
};
console.log(person.imie);
console.log(person.wzrost);
person.print();
/* Odwołanie się do pól obiektu w sposób a'la tablicowy */
console.log(person['imie']);//do pola
person['print']();
person. printThis();
/* Zmiana wartości pola */
person.wzrost = 190;
console.log(person);
console.log(person.wzrost);
/* Dodawanie pole, któego nie ma w obikcie */
person.wiek = 51;
console.log(person);
console.log(person.wiek);
/* Destrukturyzacja - jedno pole do jednej zmiennej */
var women = {
    imie: "Jolka",
    wzrost: 178
}
let {imie, wzrost} = women;
console.log(imie);
console.log(wzrost);
/* Obiekty ES 5 i ES 6 */
/* J/W ale w ES 6 */
let personES = {
    imie: "Henia",
    wzrost: 178,
    print(){
        console.log(this.imie, this.wzrost);
    },
    printThis(){
        console.log("To jest metoda obiektu 'printThis' i zaraz zostanie uruchomiona ");
        this.print();
    }
};
personES.printThis();
/* Class */
/*
class Pracownicy{
    constructor(imie, nazwisko, wiek){
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wiek = wiek;
    }
    pokazPracownika(){
        console.log(`Imie_Pracownika: ${this.imie}, Nazwisko_Pracownika: ${this.nazwisko}`);
    }
}
const pracownik1 = new Pracownicy("Roman", "Zbroiński", 51);
pracownik1.pokazPracownika();
console.log(pracownik1);

const pracownik2 = new Pracownicy("Anna", "Dymna");
pracownik2.pokazPracownika();

const pracownik3 = new Pracownicy("Jan", "Kowalski");
pracownik3.pokazPracownika();
*/
/* ES 5 */
function Pracownicy(imie, nazwisko){
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.pokazPracownika = function(){
        console.log("Imię pracownika" + this.imie + ", Nazwisko praconika: "+ this.nazwisko);
    }
};
const pracownik1 = new Pracownicy("Roman", "Zbroiński", 51);
pracownik1.pokazPracownika();
console.log(pracownik1);

const pracownik2 = new Pracownicy("Anna", "Dymna");
pracownik2.pokazPracownika();

const pracownik3 = new Pracownicy("Jan", "Kowalski");
pracownik3.pokazPracownika();

/* Książka start */

class Ksiazka{
    constructor(tytul, autor, przeczytana ){
      this.tytul = tytul,
      this.autor = autor,
      this.przeczytana = przeczytana;
      if(this.przeczytana == true){
          this.przeczytana = "przeczytana";
      }else if(this.przeczytana == false){
        this.przeczytana =  "nie-przeczytana";
      }
      else if(this.przeczytana!=(true || false)){
        this.przeczytana = "A cholera wie!";}
      else{
          this.przeczytana = "bleeee";
        }
    }
    
    opiszKsiazke(){
        console.log(`Książka ma tytuł ${this.tytul}, autorem jest ${autor} i została ${przeczytana}`);
    }
};
const ksiazka1 = new Ksiazka("Wiedźmin", "Andrzej Spakowski", true);
console.log(ksiazka1);

const ksiazka2 = new Ksiazka("Wiedźmin", "Andrzej Spakowski", false);
console.log(ksiazka2);

const ksiazka3 = new Ksiazka("Wiedźmin", "Andrzej Spakowski");
console.log(ksiazka3);

//var ksiazki = new Array(ksiazka1,ksiazka2,ksiazka3);

/*
for(i=0; i<ksiazki.length; i++){
    console.log(ksiazki[i]);
 }
*/
/*
for(let items of ksiazki){
    console.log(items);
}
console.log(ksiazki);
*/
/* Math */
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math */
console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.sin(0));
console.log(Math.sin(Math.PI/2));
console.log(Math.cos(Math.PI/2));
console.log(Math.pow(2,3));//Potęgowanie
console.log(Math.sqrt(9));//Pierwiastek
console.log(Math.random());//Losowo pomiędzy 0 a 1
console.log(Math.floor(3.99));//Najmniejsza całkowita od podanej lub równa podaej
console.log(Math.floor(Math.random()*101));//Losowanie liczby z zakresu o - 100
/* Losowanie od 1 do 100 */
console.log(Math.floor(Math.random()*100)+1);
/* Zaokrąglanie do najbliższej całkowitej */
console.log(Math.round(10.49));
console.log(Math.round(10.51));