 /* Zadanie 1 */
       document.write("Zadanie 1: ");
        document.write("<br />");
       var numbersText = "Akademia 108";
        function reversText(nrText)
        {
            nrText = numbersText;
            document.write(nrText.split("").reverse().join(""));
            document.write("<br />");
            document.write(nrText.split());
        }
        reversText();
        document.write("<br />"+"*************************" + "<br />");
        /* Zadanie 2 */
        document.write("<br />");
        document.write("Zadanie 2: ");
        document.write("<br />");
        var numberText2 = "Akademia 108";
        function abarot(Text)
        {
            Text = numberText2;
            document.write(Text.split("").sort().join(""));
        }
        abarot();
        document.write("<br />" + "*************************" + "<br />");

    

        document.write("<br />");
         /* Zadanie 3 - Suma Iloczyn */
        /* Wersja a - dwie odrębne funkcje plus trzecia wywołująca obie */
        document.write("Zadanie 3: ");
        document.write("<br />");
        let tab1 = [1,2,3,4,5,6];
        function sum1()
        {
            let i, result = 0;
            numberParam = tab1.length;
            for(i=0;i<numberParam;i++){
                    result += tab1[i];
            }
            return result;
        }
        document.write("Suma wynosi: " + sum1());
        document.write("<br />");
        function multiplication1()
        {
            let j, result2 = 1;
            numberParam2 = tab1.length;
            for(j=0;j<numberParam2;j++){
                    result2 = result2 * tab1[j];
            }
            return result2;
        }
        document.write("Iloczyn wynosi: " + multiplication1());
        document.write("<br />");
        function multiFunction()
        {
            document.write ("Suma tablicy wynosi: " + sum1() + "<br />" + "Iloczyn wartości tablicy wynosi: " + multiplication1() + "<br />");
        }
        multiFunction();
        document.write("<br />");
        /* Wersja b - dodałem j/w do jednej funkcji */
        function blee(){
            let i, result = 0;
            numberParam = tab1.length;
            for(i=0;i<numberParam;i++){
                    result += tab1[i];
            }
            document.write("Suma wynosi: " + result);
            document.write("<br />");
            let j, result2 = 1;
            numberParam2 = tab1.length;
            for(j=0;j<numberParam2;j++){
                    result2 = result2 * tab1[j];
            }
            document.write("Iloraz wynosi" + result2);
            document.write("<br />");
        }
        blee();

        /* 3 wersja -  skrócona jedna funkcja*/
        let tab4 = [1,2,3,4,5,6];
        function blee2(tab4){
            let i, suma=0;iloraz=1;
            for(i=0;i<tab4.length;i++){
                   suma +=tab4[i];
                   iloraz = iloraz * tab4[i];
                   
            }
            document.write("Suma elementów tablicy tab4 wynosi: " + suma);
            document.write("<br />")
            document.write("Iloraz elementów tablicy tab4 wynosi: "+ iloraz);
        }
        blee2(tab4);

        /* Zadanie 4 */

        document.write("<br />" + "*************************" + "<br />");
            /* Wartości do potęgi */
        /* Punkt wyjścia wersja bez fukcji */
        document.write("<br />");
        let tab2 = [1,2,3,4,5,6,7,8,9], i, pot=2;
        for(i=0;i<tab2.length;i++){
            document.write(tab2[i]*tab2[i] + ", ");
        }
        document.write("<br />");
        /* Wersja z funkcją - prosta z opcją do pot. */
        let tab3 = [1,2,3,4,5,6,7,8,9], x;
        function doKw(pot){
            for(x=0;x<tab3.length;x++)
            {
                //elemTab = tab3[i];
                document.write(tab3[x]*tab3[x]+", ");
            }
        }
        doKw(tab3);
        /* Wersja z funkcją Math.pow(item,pot) */
        document.write("<br />");
        let tab3b = [1,2,3,4,5,6,7,8,9], xb;
        function doKw2(){
            
            for(xb=0;xb<tab3b.length;xb++)
            {
                let wynik = Math.pow(tab3b[xb],2);
                document.write(wynik + ", ");
            }
            
        }
        doKw2();
        document.write("<br />" + "*************************" + "<br />");
        /* Zadanie 4 - Suma kwadratów */
        let tabKw = [1,2,3,4,5,6,7,8,9];
        let suma = 0;

        function qwe(kw)
            {
                for(i=0;i<tabKw.length;i++)
                {
                    suma+=Math.pow(tabKw[i],2);
                } document.write("Suma elementów tablicy do kwadratu wynosi: " + suma);
            }
            qwe(kw);

/* Function learning */
