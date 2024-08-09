let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("Game was Draw");
  msg.innerText = "Draw. Play Again !";
  msg.style.backgroundColor = "rgb(18, 18, 61)";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin == true) {
    userScore++;
    userScorePara.innerText = userScore;

    console.log("You Win !");
    msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    
    console.log("You Lose !");
    msg.innerText = `You Lose ! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.group("user choice =", userChoice);
  // Generate computer choice
  const compChoice = genCompChoice();
  console.log("computer choice =", compChoice);

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissor, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice == "paper") {
      //rock , scissor
      userWin = compChoice === "scissor" ? false : true;
    } else {
      //user : scissor left, comp = rock, papar
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked :", userChoice);
    playGame(userChoice);
  });
});
