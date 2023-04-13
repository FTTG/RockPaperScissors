let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // Use Math.random * 3 to get a number between 0 and 2 to define the computer's choice.
    let hand = Math.floor(Math.random() * 3);
    switch (hand) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
        default:
            return 'This was not supposed to happen';
            break;
    }
}

function playRound() {
    // Run funcitions to get computer choices and get value of button pressed
    let player = this.value
    let computer = getComputerChoice();
    let resultRound = document.querySelector('#resultRound');
    console.log(player);
    console.log(computer);
    // Run validation for tie, if not then all scenarios where player wins and else player loses.
    if (player == computer) {
        console.log(`Tie! Both chose ${player}`);
        resultRound.textContent = `Tie! Both chose ${player}`;
        //return 0;
    }
    else if (player == 'Rock' && computer == 'Scissors' || player == 'Paper' && computer == 'Rock' || player == 'Scissors' && computer == 'Paper') {
        console.log(`You win! ${player} beats ${computer}`);
        resultRound.textContent = `You win! ${player} beats ${computer}`;
        playerScore++;
        //return 1;
    }
    else {
        console.log(`You lose! ${player} is beaten by ${computer}`);
        resultRound.textContent = `You lose! ${player} is beaten by ${computer}`;
        computerScore++;
        //return 2;
    }
    updateScores();
}

function updateScores() {
    const playerScoreText = document.querySelector('#playerScore');
    const computerScoreText = document.querySelector('#computerScore');
    playerScoreText.textContent = `Score: ${playerScore}`;
    computerScoreText.textContent = `Score: ${computerScore}`;
}

const selectWeapon = document.querySelectorAll('.weapon');

for (let weapon of selectWeapon) {
    weapon.addEventListener('click', playRound);
}