console.log("Script is loaded");

const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector("#score");
const blockWidth = 100;
const blockHeight = 20;
const ballDiameter = 20;
const gridWidth = 600;
const gridHeight = 300;

let timerId;
let xDirection = 2;
let yDirection = 2;
let score = 0;

const userStartPos = [230, 10];
let currentUserPos = userStartPos;

const ballStartPos = [270, 40];
let currentBallPos = ballStartPos;

class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
    this.topLeft = [xAxis, yAxis + blockHeight];
  }
}

const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
];

function addBlock() {
  blocks.forEach((block) => {
    const blockElement = document.createElement("div");
    blockElement.classList.add("block");
    blockElement.style.left = `${block.bottomLeft[0]}px`;
    blockElement.style.bottom = `${block.bottomLeft[1]}px`;
    grid.appendChild(blockElement);
  });
}

addBlock();

const user = document.createElement("div");
user.classList.add("user");
grid.appendChild(user);

function drawUser() {
  user.style.left = `${currentUserPos[0]}px`;
  user.style.bottom = `${currentUserPos[1]}px`;
}
drawUser();

function moveUser(e) {
  switch (e.key) {
    case "ArrowLeft":
      if (currentUserPos[0] > 0) {
        currentUserPos[0] -= 10;
        drawUser();
      }
      break;
    case "ArrowRight":
      if (currentUserPos[0] < gridWidth - blockWidth) {
        currentUserPos[0] += 10;
        drawUser();
      }
      break;
  }
}

document.addEventListener("keydown", moveUser);

const ball = document.createElement("div");
ball.classList.add("ball");
grid.appendChild(ball);

const drawBall = () => {
  ball.style.left = `${currentBallPos[0]}px`;
  ball.style.bottom = `${currentBallPos[1]}px`;
};
drawBall();

function moveBall() {
  currentBallPos[0] += xDirection;
  currentBallPos[1] += yDirection;
  drawBall();
  checkForCollision();
}

timerId = setInterval(moveBall, 10);

function checkForCollision() {
  for (let i = 0; i < blocks.length; i++) {
    if (
      currentBallPos[0] > blocks[i].bottomLeft[0] &&
      currentBallPos[0] < blocks[i].bottomRight[0] &&
      currentBallPos[1] + ballDiameter > blocks[i].bottomLeft[1] &&
      currentBallPos[1] < blocks[i].topLeft[1]
    ) {
      const allBlocks = Array.from(document.querySelectorAll(".block"));
      allBlocks[i].classList.remove("block");
      blocks.splice(i, 1);
      changeBallDirection();
      //   score += 10;
      //   scoreDisplay.textContent = score;
      if (blocks.length === 0) {
        // scoreDisplay.textContent = "You Win!";
        clearInterval(timerId);
        document.removeEventListener("keydown", moveUser);
        setTimeout(() => {
          alert("You Win!");
        }, 500);
      }
      break;
    }
  }

  if (
    currentBallPos[0] >= currentUserPos[0] &&
    currentBallPos[0] <= currentUserPos[0] + blockWidth &&
    currentBallPos[1] >= currentUserPos[1] &&
    currentBallPos[1] <= currentUserPos[1] + blockHeight
  ) {
    changeBallDirection();
  }

  if (currentBallPos[0] >= gridWidth - ballDiameter) {
    xDirection = -Math.abs(xDirection);
  } else if (currentBallPos[0] <= 0) {
    xDirection = Math.abs(xDirection);
  }
  if (currentBallPos[1] >= gridHeight - ballDiameter) {
    yDirection = -Math.abs(yDirection);
  } else if (currentBallPos[1] <= 0) {
    clearInterval(timerId);
    document.removeEventListener("keydown", moveUser);
    // scoreDisplay.textContent = "Game Over!";
    alert("Game Over!");
  }
}

const changeBallDirection = () => {
  yDirection = -yDirection;
};
