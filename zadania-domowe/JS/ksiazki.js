
class Ksiazka{
    constructor(tytul, autor, przeczytana ){
      this.tytul = tytul;
      this.autor = autor;
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
        console.log(`Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i została przeczytana`);
    }
};
const ksiazka1 = new Ksiazka("Wiedźmin", "Andrzej Sapkowski", true);
console.log(ksiazka1);
ksiazka1.opiszKsiazke();


const ksiazka2 = new Ksiazka("Wiedźmin", "Andrzej Sapkowski", false);
console.log(ksiazka2);
ksiazka1.opiszKsiazke();

const ksiazka3 = new Ksiazka("Wiedźmin", "Andrzej Sapkowski");
console.log(ksiazka3);
ksiazka1.opiszKsiazke();

let ksiazki = [ksiazka1.przeczytana, ksiazka2.przeczytana, ksiazka3.przeczytana];
function iloscPrzeczytanych(ksiazka)
{
    let suma = 0;
    for(let i=0;i<ksiazki.length;i++)
        {
            suma += ksiazki[i]=="przeczytana";
        }return "Suma faktycznie przeczytanych książek wynosi:  " + suma;
}
console.log(iloscPrzeczytanych(ksiazki));

function fibak(x){
  //Start, dla pierwszej pary elementów:
    let tab1 = [0,1];
    let i;
    for(i=2;i<=x;i++){
      //Pierwsza wartość tablicy - index
      let a = tab1[i-1];
      //Druga wartość tablicy - index
      let b = tab1[i-2];
      //Dodanie do tablicy
      tab1.push(a+b);
    }
    return tab1[x];

}

console.log(fibak(2));
//0,1,1,2,3,5,...Liczby
//0,1,2,3,4,5...Indexy tablicy