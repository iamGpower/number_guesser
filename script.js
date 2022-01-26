'use strict';

const secretValue = Math.trunc(Math.random() * 20) + 1;
let playerScore = 20;
document.querySelector('.number').textContent = secretValue;

document.querySelector('.check').addEventListener('click', () => {
	const guess = Number(document.querySelector('.guess').value);
	if (!guess) {
		document.querySelector('.message').textContent = '❌ No number entered';
	} else if (guess === secretValue) {
		document.querySelector('.message').textContent = '🎉 Correct Guess';
	} else if (guess > secretValue) {
		if (playerScore > 1) {
			document.querySelector('.message').textContent = '📈 Guess too high!';
			playerScore--;
			document.querySelector('.score').textContent = playerScore;
		} else {
			document.querySelector('.message').textContent =
				'😭 Sorry, you lost the game!';
			document.querySelector('.score').textContent = 0;
		}
	} else if (guess < secretValue) {
		if (playerScore > 1) {
			document.querySelector('.message').textContent = '📉 Guess too low!';
			playerScore--;
			document.querySelector('.score').textContent = playerScore;
		} else {
			document.querySelector('.message').textContent =
				'😭 Sorry, you lost the game!';
			document.querySelector('.score').textContent = 0;
		}
	}
});
