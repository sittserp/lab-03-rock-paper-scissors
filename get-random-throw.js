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
    if (player === 'rock' && computer === 'rock') {
        return 'draw';
    }
    if (player === 'rock' && computer === 'paper') {
        return 'lose';
    }
    if (player === 'rock' && computer === 'scissors') {
        return 'win';
    }
    if (player === 'paper' && computer === 'rock') {
        return 'win';
    }
    if (player === 'paper' && computer === 'paper') {
        return 'draw';
    }
    if (player === 'paper' && computer === 'scissors') {
        return 'lose';
    }
    if (player === 'scissors' && computer === 'rock') {
        return 'lose';
    }
    if (player === 'scissors' && computer === 'paper') {
        return 'win';
    }
    if (player === 'scissors' && computer === 'scissors') {
        return 'draw';
    }
}