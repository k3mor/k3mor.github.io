let endOfThePage = 0;
let preloading = false;


const showPreloader = () => {
    let preloader = document.getElementById('preloader')
    preloader.style.display ='block';
    preloading = true;
}

const hidePreloader = () => {
    let preloader = document.getElementById('preloader')
    preloader.style.display ='none';
    preloading = false;
}
const getData = () => {
    if(!preloading){
        showPreloader();
        fetch('https://akademia108.pl/api/ajax/get-users.php')
   .then(res=>res.json())
   .then(data => {
    let body = document.body;
    let hr = document.createElement('hr');
    body.appendChild(hr);
       for(let user of data) {
           let pId = document.createElement('p');
           let pName = document.createElement('p');
           let pWebsite = document.createElement('p');

           pId.innerText = `User ID: ${user.id}`;
           pName.innerText = `Name: ${user.name}`;
           pWebsite.innerHTML = `User Website: ${user.pWebsite}<br />----------`;

           let body = document.body;
           body.appendChild(pId);
           body.appendChild(pName);
           body.appendChild(pWebsite);

       }
       hidePreloader();
        console.log(data);
   })
   .catch(error => {
       console.log(error);
   })
}
} 

const   scrollToEndPage = () => {
    let d = document.documentElement;
    //height of an element's content, incuding content
    //not visible on the screen
    let scrollHeight = d.scrollHeight;
    //number of pixels that an element's content 
    //sxcrolled vertically
    let scrollTop = d.scrollTop;
    //inner height of an element in pixels
    let clientHeight = d.clientHeight;

    let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);

    if(sumScrollTopClientHeight>=scrollHeight){
        endOfThePage += 1;
        console.log(`Finish page ${endOfThePage}`);
        getData();
    }
   
}
window.addEventListener('scroll', scrollToEndPage);
