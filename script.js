'use strict';

let secretValue = Math.trunc(Math.random() * 20) + 1;
let playerInitScore = 20;
let highScore = 0;

const displayMessage = (message) => {
	document.querySelector('.message').textContent = message;
};
console.log(secretValue);

document.querySelector('.check').addEventListener('click', () => {
	const guess = Number(document.querySelector('.guess').value);

	// When guess is empty
	if (!guess) {
		displayMessage('❌ No number entered');
	} else if (guess === secretValue) {
		displayMessage('🎉 Correct Guess');

		document.querySelector('.number').textContent = secretValue;

		document.querySelector('body').style.backgroundColor = '#60b347';

		document.querySelector('.number').style.width = '20rem';

		if (playerInitScore > highScore) {
			highScore = playerInitScore;
			document.querySelector('.highscore').textContent = highScore;
		}

		// When guess is wrong
	} else if (guess !== secretValue) {
		if (playerInitScore > 1) {
			displayMessage(
				guess > secretValue ? '📈 Guess too high!' : '📉 Guess too low!',
			);
			playerInitScore--;
			document.querySelector('.score').textContent = playerInitScore;
		} else {
			displayMessage('😭 Sorry, you lost the game!');
			document.querySelector('.score').textContent = 0;
		}
	}
});

document.querySelector('.again').addEventListener('click', () => {
	secretValue = Math.trunc(Math.random() * 20) + 1;
	console.log(secretValue);
	playerInitScore = 20;
	displayMessage('Start guessing...');
	document.querySelector('.score').textContent = playerInitScore;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = '';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
});
