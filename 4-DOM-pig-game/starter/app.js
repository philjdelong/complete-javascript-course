/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var currentPlayer = 0;
var scores = [0, 0];
var playerOneScore = scores[0];
var playerTwoScore = scores[1];
var totalWins = [0, 0]

function newGame() {
	scores = [0, 0];
	document.querySelector('.btn-roll').style.display = 'block';
	document.querySelector('#total-score-0').textContent = '0';
	document.querySelector('#total-score-1').textContent = '0';
	document.querySelector('.player-0-panel').id = null;
	document.querySelector('.player-1-panel').id = null;
}

function addPoints(points) {
	scores[currentPlayer] = scores[currentPlayer] + points;
}

function switchPlayer() {
	if(currentPlayer == 0) {
		currentPlayer = 1;
	} else {
		currentPlayer = 0;
	}
	activePlayer();
}

function activePlayer() {
	if(currentPlayer == 0) {
		document.querySelector('.player-1-panel').id = 'active';
		document.querySelector('.player-0-panel').id = null;
	} else {
		document.querySelector('.player-0-panel').id = 'active';
		document.querySelector('.player-1-panel').id = null;
	}
}

function winnner() {
	if(scores[0] >= 25 || scores[1] >= 25) {
		document.querySelector('#total-score-' + currentPlayer).textContent = "Winner!";
		document.querySelector('#total-score-' + currentPlayer).style.display = 'block';
		document.querySelector('.btn-roll').style.display = 'none';
		totalWins[currentPlayer] = totalWins[currentPlayer] + 1;
		document.querySelector('#wins-' + currentPlayer).textContent = totalWins[currentPlayer];
	}
}

document.querySelector('.btn-roll').style.display = 'none';
document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-new').addEventListener('click', newGame);

document.querySelector('.btn-roll').addEventListener('click', function() {
	var diceRoll = Math.floor(Math.random() * 6) + 1;
	var diceDOM = document.querySelector('.dice');
	diceDOM.src = 'dice-' + diceRoll + '.png';

	addPoints(diceRoll);

	document.querySelector('.dice').style.display = 'block';	
	document.querySelector('#total-score-' + currentPlayer).textContent = scores[currentPlayer];
	document.querySelector('#total-score-' + currentPlayer).style.display = 'block';

	winnner();
	switchPlayer();
});

function resetWins() {
	document.querySelector('#wins-0').textContent = "0";
	document.querySelector('#wins-1').textContent = "0";
	newGame();
}

document.querySelector('.btn-reset').addEventListener('click', resetWins)