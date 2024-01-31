let player_score = 0;
let computer_score = 0;
let player_el = document.querySelector("#player");
let computer_el = document.querySelector("#computer");
let score_el = document.querySelector("#score");
let _result = document.querySelector("#result");

const btns = document.querySelectorAll("button");

//-start- Game logics
function getComputerChoice() {
    let comp_choice = ["Rock", "Paper", "Scissors"];
    let random_choice = Math.floor(Math.random() * comp_choice.length);

    console.log(comp_choice[random_choice]);
    return comp_choice[random_choice];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        _result.textContent = "Result: " + "It's a draw"
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        _result.textContent = "Result: " + "Player wins";
        player_score++;
    } else {
        _result.textContent = "Result: " + "Computer wins";
        computer_score++;
    }

    score_el.textContent = `Score: ${player_score} | ${computer_score}`;

    if (player_score >= 5) {
        _result.textContent = `Final Result: Player wins the round`;
        setTimeout(() => {
            location.reload();
            btns.disabled = true;
        }, 2500);
    } else if (computer_score >= 5) {
        _result.textContent = `Final Result: Computer wins the round`;
        setTimeout(() => {
            location.reload();
            btns.disabled = true;
        }, 2500);
    }

    return `${playerSelection} | ${_result.textContent} | ${player_score} - ${computer_score}`
}
// -end- Game logic

// Event listener
function game() {
    btns.forEach((button) => {
        button.addEventListener("click", (e) => {
            const playerSelection = e.target.id
            const computerSelection = getComputerChoice();

            player_el.textContent = `Player: ${playerSelection} `;
            computer_el.textContent = `Computer: ${computerSelection} `;

            // Player
            // const player = document.querySelector("#player");
            // const content_player = document.createElement("div");
            // content_player.classList.add('content_player');
            // content_player.textContent += `${playerSelection}`;
            // player.appendChild(player_el);

            console.log(playRound(playerSelection, computerSelection));
        });
    });
};


game();

