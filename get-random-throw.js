export function getRandomThrow() {
    let computerWeaponNumber = Math.ceil(Math.random() * 3);
    console.log(computerWeaponNumber);

    let computerWeapon;

    if (computerWeaponNumber === 1) {
        computerWeapon = 'rock';
    } else if (computerWeaponNumber === 2) {
        computerWeapon = 'paper';
    } else {
        computerWeapon = 'scissors';
    }
    console.log(computerWeapon);

    return computerWeapon;
}

export function didUserWin(player, computer) {
    if ((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')) {
        return 'win';
    } else if (player === computer) {
        return 'draw';
    } else {
        return 'lose';
    }
}

