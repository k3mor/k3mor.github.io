const setBackground = () => {
    let p1 = document.querySelector(`.first`);
    let p2 = document.querySelector(`.last`);

//Sposób 1, poprzez style:
    //p1.style.backgroundColor = 'red';
    //p2.style.backgroundColor = 'yellow';
//Sposób 2. Dopięcie klasy
    //p1.classList.add('bg-red');
    //p2.classList.add('bg-yellow');
//Poprzez klase toogle - dodaje usuwa jednym kliknięciem
    p1.classList.toggle('bg-red');
    p2.classList.toggle('bg-yellow');

    //console.log(p2);
}
let btnSetBackground = document.getElementById(`set-background`);
btnSetBackground.addEventListener(`click`,setBackground);