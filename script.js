let _playerScore = 0;
let _computerScore = 0;

function getComputerChoice() {
    // Use Math.random * 3 to get a number between 0 and 2 to define the computer's choice.
    let hand = Math.floor(Math.random() * 3);
    const pcWeapon = document.querySelector('#pcweapon');
    pcWeapon.style.border = 'solid #D90368 3px'
    switch (hand) {
        case 0:
            pcWeapon.src = "images/rock.png"
            return 'Rock';
        case 1:
            pcWeapon.src = "images/paper.png"
            return 'Paper';
        case 2:
            pcWeapon.src = "images/scissors.png"
            return 'Scissors';
        default:
            return 'This was not supposed to happen';
    }
}

function playRound() {
    // Run funcitions to get computer choices and get value of button pressed
    let player = this.value

    let computer = getComputerChoice();
    determineRoundWinner(player, computer);
    updateScores();
    if (_playerScore >= 5 || _computerScore >= 5) setGameWinner();
}

function determineRoundWinner(player, computer) {
    const resultRound = document.querySelector('#resultRound');
    // Run validation for tie, if not then all scenarios where player wins and else player loses.
    if (player == computer) {
        console.log(`Tie! Both chose ${player}`);
        resultRound.textContent = `Tie! Both chose ${player}`;
    }
    else if (player == 'Rock' && computer == 'Scissors' || player == 'Paper' && computer == 'Rock' || player == 'Scissors' && computer == 'Paper') {
        console.log(`You win! ${player} beats ${computer}`);
        resultRound.textContent = `You win! ${player} beats ${computer}`;
        _playerScore++;
    }
    else {
        console.log(`You lose! ${player} is beaten by ${computer}`);
        resultRound.textContent = `You lose! ${player} is beaten by ${computer}`;
        _computerScore++;
    }
}

function updateScores() {
    const playerScoreText = document.querySelector('#playerScore');
    const computerScoreText = document.querySelector('#computerScore');
    playerScoreText.textContent = `Score: ${_playerScore}`;
    computerScoreText.textContent = `Score: ${_computerScore}`;
}

function setGameWinner() {
    let winner = '';
    const nameTag = document.createElement('span');
    nameTag.id = 'resultWinner';
    const resultRound = document.querySelector('#resultRound');
    // Define who got to 5 points first, and then reset the scores.
    if (_playerScore >= 5) {
        // winner = 'the Player';
        nameTag.textContent = 'the Player'
        nameTag.style.color = '#266DD3';
    }
    else {
        if (nameTag) {
            nameTag.textContent = 'the Computer';
            nameTag.style.color = '#D90368';
        }

    }
    _computerScore = 0;
    _playerScore = 0;
    // Display the winner and resets the scores on the DOM.
    const playerScoreText = document.querySelector('#playerScore');
    const computerScoreText = document.querySelector('#computerScore');
    playerScoreText.textContent = `Score: 0`;
    computerScoreText.textContent = `Score: 0`;

    resultRound.textContent = `The winner of this Game was `;
    resultRound.appendChild(nameTag);
}

const selectWeapon = document.querySelectorAll('.weapon');
document.addEventListener('DOMContentLoaded', function () {
    for (let weapon of selectWeapon) {
        weapon.addEventListener('click', playRound);
    }
});