alert('Привет. Чет я намудрил с каруселью животных. Сейчас вроде как все работает, но если есть проблемы с ней - отпиши плиз. Поправлю.')

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

//new feedbacks

let feedbackContainer = document.querySelector('.feedback-container');

let data = [
    {
        name: 'Mark Barberio',
        text: 'The best zoo? Yes. In my opinion, this zoo is the best in our city',
    },
    {
        name: 'Nick Merkley',
        text: 'The best zoo? No. In my opinion, this zoo is the worst in our city',
    },
    {
        name: 'Ryan Spooner',
        text: "We're no strangers to love You know the rules and so do I (do I) A full commitment's what I'm thinking of",
    },
    {
        name: 'Mikko Rantanen',
        text: 'Never gonna give you up Never gonna let you down',
    },
    {
        name: 'Connor MacDavid',
        text: 'Never gonna run around and desert you Never gonna make you cry',
    },
    {
        name: 'Kyle Connor',
        text: 'Never gonna say goodbye Never gonna tell a lie and hurt you',
    },
]

feedbackContainer.style.width = '3200px';
if (document.documentElement.clientWidth <= 1440) {
    feedbackContainer.style.width = '3523px';
}

for (let i=0; i < 6; i++) {
    feedbackContainer.insertAdjacentHTML('beforeend', 
    `<div class="feedback-border">
    <div class="feedback">
        <div class="author-info">
            <img src="assets/user_icon.svg" alt="user">
            <div class="author-name">
                <p class="name">${data[i].name}</p>
                <p class="author-adress">Local Austria &#183; Yesterday</p>
            </div>
        </div>
        <p class="feedback-text">${data[i].text}</p>
    </div></div>`)
}

//scroll feedback

let scrollBar = document.querySelector('.feedback-scroll');

function scroll() {
    let value = scrollBar.value * -292;
    if (document.documentElement.clientWidth <= 1440) {
        value = scrollBar.value * -323;
        scrollBar.max = 8;
    }
    feedbackContainer.style.transform = `translateX(${value}px)`;
}

scrollBar.addEventListener('input', scroll);

//feedback popup

let popupInfo = [
    {
        name: 'Michael Jonh',
        img: 'user_icon.svg',
        text: "The best online zoo I've met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I've met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
    },
    {
        name: 'Oskar Samborsky',
        img: 'Ellipse2.png',
        text: "Online zoo is one jf the ways to instill a love for animals.The best online zoo I've met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I've met. My son delighted very much ljves to watch gouillas.",
    },
    {
        name: 'Fredericka Michelin',
        img: 'Ellipse3.png',
        text: "The best online zoo I've met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I've met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
    },
]

for (let i=0; i < 3; i++) {
    feedbackContainer.insertAdjacentHTML('beforebegin', 
    `<div class="feedback-border-popup feedback-popup${i}">
    <div class="feedback-popup">
        <div class="author-info">
            <img src="assets/${popupInfo[i].img}" alt="user">
            <div class="author-name">
                <p class="name">${popupInfo[i].name}</p>
                <p class="author-adress">Local Austria &#183; Yesterday</p>
            </div>
        </div>
        <p class="feedback-popup-text">${popupInfo[i].text}</p>
    </div></div>`)
}

feedbackContainer.insertAdjacentHTML('beforebegin', 
`<div class="feedback-popup-back">
   <img src="assets/cancel.png" alt="exit">
 </div>`);

let firstFeedback = document.querySelector('.Michael-Jonh');
let secondFeedback = document.querySelector('.Oskar-Samborsky');
let thirdFeedback = document.querySelector('.Fredericka-Michelin');

let firstPopup = document.querySelector('.feedback-popup0');
let secondPopup = document.querySelector('.feedback-popup1');
let thirdPopup = document.querySelector('.feedback-popup2');
let feedbackBack = document.querySelector('.feedback-popup-back');

function popupFeedback1() {
    if (document.documentElement.clientWidth < 1000) {
            firstPopup.classList.add('feedback-popup-active');
            feedbackBack.classList.add('feedback-popup-back-active');
            body.classList.add('body-hidden');
    }
}

function popupFeedback2() {
    if (document.documentElement.clientWidth < 1000) {
            secondPopup.classList.add('feedback-popup-active');
            feedbackBack.classList.add('feedback-popup-back-active');
            body.classList.add('body-hidden');
    }
}

function popupFeedback3() {
    if (document.documentElement.clientWidth < 1000) {
            thirdPopup.classList.add('feedback-popup-active');
            feedbackBack.classList.add('feedback-popup-back-active');
            body.classList.add('body-hidden');
    }
}

function popupFeedbackExit() {
    if (document.documentElement.clientWidth < 1000) {
        firstPopup.classList.remove('feedback-popup-active');
        secondPopup.classList.remove('feedback-popup-active');
        thirdPopup.classList.remove('feedback-popup-active');
        feedbackBack.classList.remove('feedback-popup-back-active');
        body.classList.remove('body-hidden');
    }
}

firstFeedback.addEventListener('click', popupFeedback1);
secondFeedback.addEventListener('click', popupFeedback2);
thirdFeedback.addEventListener('click', popupFeedback3);
feedbackBack.addEventListener('click', popupFeedbackExit);

// animal-container

let sectionAnimal = document.querySelector('.section-animal-border');
sectionAnimal.insertAdjacentHTML('afterbegin', `<div class="animal-container active"></div>`)
let animalContainer = document.querySelector('.animal-container');

let animalData = [
    {
        name: 'GIANT PANDAS',
        native: 'Southwest China',
        food: 'bamboo',
        src: 'assets/foto-card1-panda.jpg',
    },
    {
        name: 'EAGLES',
        native: 'South America',
        food: 'meet',
        src: 'assets/foto-card2-eagle.jpg',
    },
    {
        name: 'GORILLAS',
        native: 'Congo',
        food: 'banana',
        src: 'assets/foto-card3-gorilla.jpg',
    },
    {
        name: 'TWO-TOED SLOTH',
        native: 'South America',
        food: 'banana',
        src: 'assets/foto-card5-sloth.jpg',
    },
    {
        name: 'CHEETAHS',
        native: 'Africa',
        food: 'meet',
        src: 'assets/foto-card6-cheetah.jpg',
    },
    {
        name: 'PENGUINS',
        native: 'Antarctica',
        food: 'meet',
        src: 'assets/foto-card7-penguin.jpg',
    },
    {
        name: 'ALLIGATORS',
        native: 'Southeast U.S.',
        food: 'meet',
        src: 'assets/alligator.jpg',
    },
]

function createAnimalContainer() {
    for(let i = 0; i < 4; i++) {
        
        let food = 'assets/banana-bamboo_icon.svg';
        if (animalData[i].food == 'meet') {
            food = 'assets/meet-fish_icon.svg';
        }
        
        animalContainer.insertAdjacentHTML('afterbegin', `
        <div class="animal-item">
            <img src="${animalData[i].src}" alt="animal" class="animal-item-img">
            <div>
                <p><span><b>${animalData[i].name}</b></span><br>
                Native to ${animalData[i].native}</p>
                <img src="${food}" alt="food">
            </div>
        </div>`)
    }
    if (document.documentElement.clientWidth > 999) {
        for(let i = 4; i < 6; i++) {
        
            let food = 'assets/banana-bamboo_icon.svg';
            if (animalData[i].food == 'meet') {
                food = 'assets/meet-fish_icon.svg';
            }
            
            animalContainer.insertAdjacentHTML('afterbegin', `
            <div class="animal-item">
                <img src="${animalData[i].src}" alt="animal" class="animal-item-img">
                <div>
                    <p><span><b>${animalData[i].name}</b></span><br>
                    Native to ${animalData[i].native}</p>
                    <img src="${food}" alt="food">
                </div>
            </div>`)
        }
    }
}

createAnimalContainer();

// animal-slider

let items = document.querySelectorAll('.animal-container');
let prev = document.querySelector('.left-arrow');
let next = document.querySelector('.right-arrow');
let currentItem = 0;
let maxItem = 0;
let isEnabled = true;
let length = items.length;

function changeNext() {
    //if(currentItem >= maxItem) {
	    //алгоритм создания нового айтама
        let food = 'assets/meet-fish_icon.svg';
        let arr = [];

        function random() {
            for (let i = 0; i < 6; i++) {
                function check() {
                    let temp = Math.floor(Math.random()*6);
                    if (arr.includes(temp) == true) {
                        check();
                    }
                    else {
                        arr.push(temp);
                    }
                }
                check();
            }
            return arr;
        }
        random();
        if (document.documentElement.clientWidth > 999) {
            sectionAnimal.insertAdjacentHTML('beforeend', `
            <div class="animal-container">
                <div class="animal-item">
                    <img src="${animalData[arr[1]].src}" alt="animal" class="animal-item-img">
                    <div>
                        <p><span><b>${animalData[arr[1]].name}</b></span><br>
                        Native to ${animalData[arr[1]].native}</p>
                        <img src="${food}" alt="food">
                    </div>
                </div>
                <div class="animal-item">
                    <img src="${animalData[arr[2]].src}" alt="animal" class="animal-item-img">
                    <div>
                        <p><span><b>${animalData[arr[2]].name}</b></span><br>
                        Native to ${animalData[arr[2]].native}</p>
                        <img src="${food}" alt="food">
                    </div>
                </div>
                <div class="animal-item">
                    <img src="${animalData[arr[3]].src}" alt="animal" class="animal-item-img">
                    <div>
                        <p><span><b>${animalData[arr[3]].name}</b></span><br>
                        Native to ${animalData[arr[3]].native}</p>
                        <img src="${food}" alt="food">
                    </div>
                </div>
                <div class="animal-item">
                    <img src="${animalData[arr[4]].src}" alt="animal" class="animal-item-img">
                    <div>
                        <p><span><b>${animalData[arr[4]].name}</b></span><br>
                        Native to ${animalData[arr[4]].native}</p>
                        <img src="${food}" alt="food">
                    </div>
                </div>
                <div class="animal-item">
                    <img src="${animalData[arr[5]].src}" alt="animal" class="animal-item-img">
                    <div>
                        <p><span><b>${animalData[arr[5]].name}</b></span><br>
                        Native to ${animalData[arr[5]].native}</p>
                        <img src="${food}" alt="food">
                    </div>
                </div>
                <div class="animal-item">
                    <img src="${animalData[arr[0]].src}" alt="animal" class="animal-item-img">
                    <div>
                        <p><span><b>${animalData[arr[0]].name}</b></span><br>
                        Native to ${animalData[arr[0]].native}</p>
                        <img src="${food}" alt="food">
                    </div>
                </div>
            </div>`)
        }
        else {
            sectionAnimal.insertAdjacentHTML('beforeend', `
            <div class="animal-container">
                <div class="animal-item">
                    <img src="${animalData[arr[1]].src}" alt="animal" class="animal-item-img">
                    <div>
                        <p><span><b>${animalData[arr[1]].name}</b></span><br>
                        Native to ${animalData[arr[1]].native}</p>
                        <img src="${food}" alt="food">
                    </div>
                </div>
                <div class="animal-item">
                    <img src="${animalData[arr[2]].src}" alt="animal" class="animal-item-img">
                    <div>
                        <p><span><b>${animalData[arr[2]].name}</b></span><br>
                        Native to ${animalData[arr[2]].native}</p>
                        <img src="${food}" alt="food">
                    </div>
                </div>
                <div class="animal-item">
                    <img src="${animalData[arr[3]].src}" alt="animal" class="animal-item-img">
                    <div>
                        <p><span><b>${animalData[arr[3]].name}</b></span><br>
                        Native to ${animalData[arr[3]].native}</p>
                        <img src="${food}" alt="food">
                    </div>
                </div>
                <div class="animal-item">
                    <img src="${animalData[arr[4]].src}" alt="animal" class="animal-item-img">
                    <div>
                        <p><span><b>${animalData[arr[4]].name}</b></span><br>
                        Native to ${animalData[arr[4]].native}</p>
                        <img src="${food}" alt="food">
                    </div>
                </div>
            </div>`)  
        }
        items = document.querySelectorAll('.animal-container');
        maxItem +=1;
        currentItem = 1;
        length += 1;
    //}
    //else {currentItem +=1}
}

function changePrev() {
    //if(currentItem == 0) {
	    //алгоритм создания нового айтама
        let food = 'assets/meet-fish_icon.svg';
        let arr = [];

        function random() {
            for (let i = 0; i < 6; i++) {
                function check() {
                    let temp = Math.floor(Math.random()*6);
                    if (arr.includes(temp) == true) {
                        check();
                    }
                    else {
                        arr.push(temp);
                    }
                }
                check();
            }
            return arr;
        }
        random();
        if (document.documentElement.clientWidth > 999) {
            sectionAnimal.insertAdjacentHTML('afterbegin', `
            <div class="animal-container">
                <div class="animal-item">
                    <img src="${animalData[arr[1]].src}" alt="animal" class="animal-item-img">
                    <div>
                        <p><span><b>${animalData[arr[1]].name}</b></span><br>
                        Native to ${animalData[arr[1]].native}</p>
                        <img src="${food}" alt="food">
                    </div>
                </div>
                <div class="animal-item">
                    <img src="${animalData[arr[2]].src}" alt="animal" class="animal-item-img">
                    <div>
                        <p><span><b>${animalData[arr[2]].name}</b></span><br>
                        Native to ${animalData[arr[2]].native}</p>
                        <img src="${food}" alt="food">
                    </div>
                </div>
                <div class="animal-item">
                    <img src="${animalData[arr[3]].src}" alt="animal" class="animal-item-img">
                    <div>
                        <p><span><b>${animalData[arr[3]].name}</b></span><br>
                        Native to ${animalData[arr[3]].native}</p>
                        <img src="${food}" alt="food">
                    </div>
                </div>
                <div class="animal-item">
                    <img src="${animalData[arr[4]].src}" alt="animal" class="animal-item-img">
                    <div>
                        <p><span><b>${animalData[arr[4]].name}</b></span><br>
                        Native to ${animalData[arr[4]].native}</p>
                        <img src="${food}" alt="food">
                    </div>
                </div>
                <div class="animal-item">
                    <img src="${animalData[arr[5]].src}" alt="animal" class="animal-item-img">
                    <div>
                        <p><span><b>${animalData[arr[5]].name}</b></span><br>
                        Native to ${animalData[arr[5]].native}</p>
                        <img src="${food}" alt="food">
                    </div>
                </div>
                <div class="animal-item">
                    <img src="${animalData[arr[0]].src}" alt="animal" class="animal-item-img">
                    <div>
                        <p><span><b>${animalData[arr[0]].name}</b></span><br>
                        Native to ${animalData[arr[0]].native}</p>
                        <img src="${food}" alt="food">
                    </div>
                </div>
            </div>`)
        }
        else {
            sectionAnimal.insertAdjacentHTML('afterbegin', `
            <div class="animal-container">
                <div class="animal-item">
                    <img src="${animalData[arr[1]].src}" alt="animal" class="animal-item-img">
                    <div>
                        <p><span><b>${animalData[arr[1]].name}</b></span><br>
                        Native to ${animalData[arr[1]].native}</p>
                        <img src="${food}" alt="food">
                    </div>
                </div>
                <div class="animal-item">
                    <img src="${animalData[arr[2]].src}" alt="animal" class="animal-item-img">
                    <div>
                        <p><span><b>${animalData[arr[2]].name}</b></span><br>
                        Native to ${animalData[arr[2]].native}</p>
                        <img src="${food}" alt="food">
                    </div>
                </div>
                <div class="animal-item">
                    <img src="${animalData[arr[3]].src}" alt="animal" class="animal-item-img">
                    <div>
                        <p><span><b>${animalData[arr[3]].name}</b></span><br>
                        Native to ${animalData[arr[3]].native}</p>
                        <img src="${food}" alt="food">
                    </div>
                </div>
                <div class="animal-item">
                    <img src="${animalData[arr[4]].src}" alt="animal" class="animal-item-img">
                    <div>
                        <p><span><b>${animalData[arr[4]].name}</b></span><br>
                        Native to ${animalData[arr[4]].native}</p>
                        <img src="${food}" alt="food">
                    </div>
                </div>
            </div>`) 
        }
        //
        items = document.querySelectorAll('.animal-container');
        maxItem +=1;
        length += 1;
        currentItem = 0;
    //}
    //else {currentItem -= 1}
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
        if(direction == 'to-left') {
            items[0].remove();
        }
        else {
            items[items.length-1].remove();
        }
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

function nextItem() {
	hideItem('to-left');
	changeNext(currentItem);
	showItem('from-right');
}

function previousItem() {
	hideItem('to-right');
	changePrev(currentItem);
	showItem('from-left');
}

prev.addEventListener('click', function() {
	if (isEnabled) {
		previousItem();
	}
});

next.addEventListener('click', function() {
	if (isEnabled) {
		nextItem();
	}
});