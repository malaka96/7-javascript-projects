console.log("script is loaded");

let randomNum = Math.floor(Math.random() * 10) + 1;
let attemptCount = 0;
let isCorrect = false;

function submit() {

    if(isCorrect){
        window.location.reload();
    }
    attemptCount++;
    document.getElementById('attempt').innerText = "Number Of Attempt : " + attemptCount;
    let userInput = document.getElementById('user-input').value;
    if (userInput == randomNum) {
        isCorrect = true;
        document.getElementById('message').innerText = "Your guess is correct!"
    } else if (userInput < randomNum) {
        document.getElementById('message').innerText = "Your guess is less than secret number!"
    } else {
        document.getElementById('message').innerText = "Your guess is greater than secret number!"
    }

    if(isCorrect){
        document.getElementById('submit-button').innerText = "Reload";
        console.log("yello ")
    }

}