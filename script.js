'use strict';

let secretValue = Math.trunc(Math.random() * 20) + 1;
let playerInitScore = 20;
console.log(secretValue);

document.querySelector('.check').addEventListener('click', () => {
	const guess = Number(document.querySelector('.guess').value);

	// When guess is empty
	if (!guess) {
		document.querySelector('.message').textContent = '❌ No number entered';
	} else if (guess === secretValue) {
		document.querySelector('.message').textContent = '🎉 Correct Guess';

		document.querySelector('.number').textContent = secretValue;

		document.querySelector('body').style.backgroundColor = '#60b347';

		document.querySelector('.number').style.width = '20rem';

		// When guess is too high
	} else if (guess > secretValue) {
		if (playerInitScore > 1) {
			document.querySelector('.message').textContent = '📈 Guess too high!';
			playerInitScore--;
			document.querySelector('.score').textContent = playerInitScore;
		} else {
			document.querySelector('.message').textContent =
				'😭 Sorry, you lost the game!';
			document.querySelector('.score').textContent = 0;
		}

		// When guess is too low
	} else if (guess < secretValue) {
		if (playerInitScore > 1) {
			document.querySelector('.message').textContent = '📉 Guess too low!';
			playerInitScore--;
			document.querySelector('.score').textContent = playerInitScore;
		} else {
			document.querySelector('.message').textContent =
				'😭 Sorry, you lost the game!';
			document.querySelector('.score').textContent = 0;
		}
	}
});

// document.querySelector('.highscore').textContent = playerInitScore

document.querySelector('.again').addEventListener('click', () => {
	secretValue = Math.trunc(Math.random() * 20) + 1;
	console.log(secretValue);
	playerInitScore = 20;
	document.querySelector('.message').textContent = 'Start guessing...';
	document.querySelector('.score').textContent = playerInitScore;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = '';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
});
