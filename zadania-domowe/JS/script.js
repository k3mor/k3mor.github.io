console.log("Zadanie 1: ");
    var numText = "Akademia 108";
    function reversText(numText)
        {
            console.log(numText.split("").reverse().join(""));
        }
    reversText(numText);
/*
*/ 
console.log("******************");
console.log("Zadanie 2: ");
    var num2Text2 = "Akademia 108";
    function abarot(numText2)
    {
        console.log(num2Text2.split("").sort().join(""));
    }
    abarot(num2Text2);
/*
*/
console.log("******************");
console.log("Zadanie : 3");

    let tab4 = [1,2,3,4,5,6];
    function doubleCal(numbers){
        let i, suma=0, iloraz=1;
        for(i=0;i<tab4.length;i++){
            suma +=numbers[i];
            iloraz = iloraz * numbers[i];       
            }
            console.log("Suma elementów tablicy tab4 wynosi: " + suma);
            console.log("Iloraz elementów tablicy tab4 wynosi: "+ iloraz);
        }
    doubleCal(tab4);

console.log("******************");
console.log("Zadanie : 4");
    let tab9 = [1,2,3,4,5,6,7,8,9];
    let suma = 0;
    function qwe()
        {
            for(i=0;i<tab9.length;i++)
                {
                    suma+=Math.pow(tab9[i],2);
                } console.log("Suma elementów tablicy do kwadratu wynosi: " + suma);
        }
    qwe();

      