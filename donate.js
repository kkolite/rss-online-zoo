//burger
let burger = document.querySelector('.menu-btn');
let burgerMenu = document.querySelector('.menu');
let burgerExit = document.querySelector('.burger-exit');
let menuBack = document.querySelector('.menu-back');
let body = document.querySelector('.body');

function openBurger() {
    burgerMenu.classList.add('menu-active');
    menuBack.classList.add('menu-active');
    body.classList.add('body-hidden');
}

function closeBurger() {
    burgerMenu.classList.remove('menu-active');
    menuBack.classList.remove('menu-active');
    body.classList.remove('body-hidden');
}

burger.addEventListener('click', openBurger);
menuBack.addEventListener('click', closeBurger);
burgerExit.addEventListener('click', closeBurger);

//donate

let donateLine = document.getElementById('debt-amount-slider');
let inputAmount = document.querySelector('.input-amount');

function setAmount(e) {
    let target = e.target;
    inputAmount.value = target.value;
}

donateLine.addEventListener('click', setAmount)

let arr = [];
for (let i = 1; i < 9; i++) {
    arr.push(document.getElementById(`${i}`))
}

if(document.documentElement.clientWidth < 1441 && document.documentElement.clientWidth > 999) {arr.splice(0, 1)};
if (document.documentElement.clientWidth < 1000) {arr.splice(0, 3)}

function maxLength() {
    if(inputAmount.value.length > 4) {
        inputAmount.value = inputAmount.max;
    }

    arr.forEach(el => {
        if (el.value == inputAmount.value) {
            el.checked = true;
        }
        else {el.checked = false}
    })
}

inputAmount.addEventListener('input', maxLength)