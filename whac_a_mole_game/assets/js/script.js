console.log("script is loaded yello world");

const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

console.log(Math.floor(Math.random() * 10));

let hitPosition;
let result = 0;
let timerId = null;
let currentTime = 10;

function randomSquare(){
    squares.forEach(element => {
        element.classList.remove('mole')
    });

    let randomSquare = squares[Math.floor(Math.random() * 10)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}

squares.forEach(element => {
    element.addEventListener('mousedown', () => {
        if(element.id == hitPosition){
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
});

function moveMole(){
    timerId = null
    timerId = setInterval(randomSquare,500)
}

function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;
    if(currentTime == -1){
        timeLeft.textContent = 0;
        clearInterval(countDownId);
        clearInterval(timerId);
        alert('Game Over! Your final score is ' + result);
    }
}

let countDownId = setInterval(countDown,1000);

//randomSquare();
moveMole();