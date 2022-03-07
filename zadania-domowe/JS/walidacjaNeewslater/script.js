let newslatterForm = document.getElementById('newslater-form');
let allAgreeChx = document.getElementById('all-agree');
const validate = (event)=>{

    //Do walidacji
    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let agree1 = document.getElementById('agree-1');
    let errors = document.getElementById('errors');

    errors.innerHTML="";

    if(txtName.value.trim() === ""){
        let liError = document.createElement('li');
        liError.innerHTML = "Wpisz imię i nazwisko";
        errors.appendChild(liError);
        //console.log(liError);
    }

    if(txtEmail.value.trim() === ""){
        let liError = document.createElement('li');
        liError.innerHTML = "Wpisz adres email";
        errors.appendChild(liError);
        //console.log(liError);
    }

    if(!txtEmail.value.includes('@')){
        let liError = document.createElement('li');
        liError.innerHTML = "Adres musi zawierać znak @";
        errors.appendChild(liError);
        //console.log(liError);
    }
    
    //
    event.preventDefault();
    //console.log(errors);
}

const allAgree = (event) => {
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');



    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
        //console.log(event.target.checked);
}

newslatterForm.addEventListener('submit', validate);
//console.log(allAgreeChx);
allAgreeChx.addEventListener('change',allAgree);