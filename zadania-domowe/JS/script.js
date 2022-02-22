console.log("Zadanie 1 a: ");
    var numText1 = "Akademia 108";
    function reversText1(numTextA)
        {
            console.log(numTextA.split("").reverse().join(""));
        }
    reversText1(numText1);

    console.log("Zadanie 1 b: ");
    var numText2 = "Akademia 108";
    function reversText2(numText)
        {
            return numText.split("").reverse().join("");
        }
    console.log(reversText2(numText2));

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
console.log("Zadanie : 4 a");
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

    console.log("Zadanie : 4 b");
    let tab10 = [1,2,3,4,5,6,7,8,9];
    let suma2 = 0;
    function qwe2(n)
        {
            for(i=0;i<n.length;i++)
                {
                    suma2+=Math.pow(tab10[i],2);
                } return "Suma elementów tablicy do kwadratu wynosi: " + suma2;
        }
    qwe2(tab10);

      