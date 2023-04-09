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

function playRound() {
    let player = getPlayerChoice();
    player = player.toLowerCase();
    let computer = getComputerChoice();
    console.log(player);
    console.log(computer);
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

console.log(playRound(playerSelection, computerSelection));