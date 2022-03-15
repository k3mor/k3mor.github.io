
$(document).ready(function(){
    //Wersja 1
    /*
    $('#get-data').click(function(){
        $.get(' https://akademia108.pl/api/ajax/get-post.php')
        .done(function(data){
            let pId = $('<p></p>').text(`PostID ${data.id}`);
            let pUserId = $('<p></p>').text(`User ID ${data.userId}`);
            let pTitle = $('<p></p>').text(`Title ${data.title}`);
            let pBody = $('<p></p>').text(`Body:  ${data.body}`);
            let hr = $('<hr />')
            //console.log(pId); console
            let jqBody = $('body');
            jqBody.append(pId);
            jqBody.append(pUserId);
            jqBody.append(pTitle);
            jqBody.append(pBody);
            jqBody.append(hr);
           
        })
        .fail(function(error){
        });        
    });
    */
    //Wersja 2
    $('#get-data').click(function(){
        $.getJSON(' https://akademia108.pl/api/ajax/get-post.php')
        .done(function(data){
            let pId = $('<p></p>').text(`PostID ${data.id}`);
            let pUserId = $('<p></p>').text(`User ID ${data.userId}`);
            let pTitle = $('<p></p>').text(`Title ${data.title}`);
            let pBody = $('<p></p>').text(`Body:  ${data.body}`);
            let hr = $('<hr />')
            //console.log(pId); console
            let jqBody = $('body');
            jqBody.append(pId);
            jqBody.append(pUserId);
            jqBody.append(pTitle);
            jqBody.append(pBody);
            jqBody.append(hr);
        })
        .fail(function(error){
        });        
    });
});

/*
let btnGetData = document.getElementById('get-data');
//console.log(btnGetData);

const getData = () => {

    fetch('https://akademia108.pl/api/ajax/get-post.php')
    .then(res => res.json())
    .then(data => {
        let pId = document.createElement('p');
        let pUserId = document.createElement('p');
        let pTitle = document.createElement('p');
        let pBody = document.createElement('p');
        let hr = document.createElement('hr');

        pId.innerText = `Post ID: ${data.id}`;
        pUserId.innerText = `User ID: ${data.userId}`;
        pTitle.innerText = `title ID: ${data.title}`;
        pBody.innerText = `Body ID: ${data.body}`;

        document.body.appendChild(pId);
        document.body.appendChild(pUserId);
        document.body.appendChild(pTitle);
        document.body.appendChild(pBody);
        document.body.appendChild(hr);
    })
        .catch(error=>{
            console.error(error);
        })
}

btnGetData.addEventListener('click',getData);

*/