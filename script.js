function getComputerChoice() {
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

function playRound(player, computer) {
    player = player.toLowerCase();
    console.log(player);
    if (player == computer) {
        return `Tie! Both chose ${player}`;
    }
    else if (player == 'rock' && computer == 'scissors' || player == 'paper' && computer == 'rock' || player == 'scissors' && computer == 'paper') {
        return `You win! ${player} beats ${computer}`;
    }
    else {
        return `You lose! ${computer} beats ${player}`;
    }

}


const playerSelection = 'Rock';
const computerSelection = getComputerChoice();
console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));