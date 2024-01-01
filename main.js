let result;
let player_score = 0;
let computer_score = 0;

function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissors"];
  let random_choice = Math.floor(Math.random() * choice.length);
  console.log(`Computer: ${choice[random_choice]}`);
  return choice[random_choice];
}

function startRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    result = `Its a draw`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    player_score++;
  } else {
    computer_score++
  }

  return result = `Player: ${playerSelection}`;
}

function game() {
  const player_input = prompt("Pick Rock, Paper or Scissors");
  const computer_input = getComputerChoice();

  console.log(startRound(player_input, computer_input));
  console.log(`Player: ${player_score} | Computer: ${computer_score}`);
}

function getResult() {
  if (player_score > computer_score) {
    result = `Player Wins`;
  } else if (player_score < computer_score) {
    result = `Computer Wins`;
  } else {
    result = `It's a draw`
  }
  console.log(result)
  return result;
}

game();
game();
game();
game();
game();
getResult();


































