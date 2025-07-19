console.log("Script is loaded");

const cardArray = [
    {
        name : 'burger',
        image : 'assets/images/burger.jpg',
    },
    {
        name : 'chilli',
        image : 'assets/images/chilli.jpg',
    },
    {
        name : 'fire',
        image : 'assets/images/fire.jpg',
    },
    {
        name : 'hotdog.jpg',
        image : 'assets/images/hotdog.jpg',
    },{
        name : 'mushmello',
        image : 'assets/images/mushmello.jpg',
    },
    {
        name : 'sausage',
        image : 'assets/images/sausage.jpg',
    },
    {
        name : 'burger',
        image : 'assets/images/burger.jpg',
    },
    {
        name : 'chilli',
        image : 'assets/images/chilli.jpg',
    },
    {
        name : 'fire',
        image : 'assets/images/fire.jpg',
    },
    {
        name : 'hotdog.jpg',
        image : 'assets/images/hotdog.jpg',
    },{
        name : 'mushmello',
        image : 'assets/images/mushmello.jpg',
    },
    {
        name : 'sausage',
        image : 'assets/images/sausage.jpg',
    },
]

let cardChoosed = [];
let cardChoosedId = [];
let wonCards = [];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');

function createBoad(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'assets/images/pixel.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoad();

function checkMatch(){
    console.log('came to check match');
    const cards = document.querySelectorAll('img');
    const optionOneId = cardChoosedId[0]
    const optionTwoId = cardChoosedId[1]

    if(cardChoosed[0] == cardChoosed[1]){
        alert('You found a match');
        cards[optionOneId].setAttribute('src', 'assets/images/white.png');
        cards[optionTwoId].setAttribute('src', 'assets/images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        
    }else{
        cards[optionOneId].setAttribute('src', 'assets/images/pixel.jpg');
        cards[optionTwoId].setAttribute('src', 'assets/images/pixel.jpg');
        alert('Try again');
    }

    cardChoosed = [];
    cardChoosedId = [];
}

function flipCard(){
    const cardId = this.getAttribute('data-id');
    cardChoosed.push(cardArray[cardId].name);
    cardChoosedId.push(cardId);
    console.log('clicked', cardId);
    console.log(cardChoosed);
    this.setAttribute('src', cardArray[cardId].image);
    if(cardChoosed.length === 2){
        setTimeout(checkMatch, 500);
    }
}