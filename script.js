function getComputerChoice() {
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

console.log(getComputerChoice());