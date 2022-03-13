const getUserData = () => {


let httpReq = new XMLHttpRequest();
console.log(httpReq);
httpReq.open('GET', 'https://jsonplaceholder.typicode.com/users/1');
httpReq.onreadystatechange = () => {
    if(httpReq.readyState === 4){
        //console.log(`dane zwrócone o gotowe do uzycia`);
        //sprawdzanie statusu http:
        if(httpReq.status === 200){
            console.log(`200 OK`);
            //I skoro jest OK, to pobieramy dane:
            let data = httpReq.responseText;
            //Zmiana na JS
            let dataJSON = JSON.parse(data);
            //console.log(data);
            //console.log(dataJSON);
            console.log(dataJSON.name);
            console.log(dataJSON.email);
            //Zwolnienie 
            httpReq = null
        }
        //console.log(`dane zwrócone o gotowe do uzycia`);
    }
    

    //console.log(httpReq.readyState);
}
httpReq.send();
}
//Timer
setInterval(getUserData, 10000)

// jeśli status połączenia został zmieniony -> httpReq.readyState
    // 0: połączenie nie nawiązane,
    // 1: połączenie nawiązane,
    // 2: żądanie odebrane,
    // 3: przetwarzanie,
    // 4: dane zwrócone i gotowe do użycia.
    // https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp