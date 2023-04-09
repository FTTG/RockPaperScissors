function getComputerChoice() {
    // Use Math.random * 3 to get a number between 0 and 2 to define the computer's choice.
    let hand = Math.floor(Math.random() * 3);
    switch (hand) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            return 'This was not supposed to happen';
            break;
    }
}

function getPlayerChoice() {
    return prompt('Rock, Paper or Scissors?');
}

function playRound() {
    // Run funcitions to get both the player and computer choices
    let player = getPlayerChoice();
    player = player.toLowerCase();
    let computer = getComputerChoice();
    console.log(player);
    console.log(computer);
    // Run validation for tie, if not then all scenarios where player wins and else player loses.
    if (player == computer) {
        console.log(`Tie! Both chose ${player}`);
        return 0;
    }
    else if (player == 'rock' && computer == 'scissors' || player == 'paper' && computer == 'rock' || player == 'scissors' && computer == 'paper') {
        console.log(`You win! ${player} beats ${computer}`);
        return 1;
    }
    else {
        console.log(`You lose! ${computer} beats ${player}`);
        return 2;
    }

}

function playGame() {
    let computerWins = 0;
    let playerWins = 0;
    for (i = 0; i < 5; i++) {
        switch (playRound()) {
            case 0:
                break;
            case 1:
                playerWins++;
                break;
            case 2:
                computerWins++;
                break;
        }
    }
    if (computerWins == playerWins) {
        return `Game ends in a tie! Score: ${playerWins}`;
    }
    else {
        return playerWins > computerWins ? `Player wins! ${playerWins} over ${computerWins}` : `Player lost! ${playerWins} against ${computerWins}`;
    }
}

console.log(playGame());