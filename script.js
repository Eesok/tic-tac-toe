let currentPlayer = ['X'];
let gameBoard = document.querySelector('.gameBoard');
gameBoard.addEventListener('click', handleClickBoard);

const selectionsX = [];
const selectionsO = [];

const winningCombos = [
	['A1', 'A2', 'A3'],
	['B1', 'B2', 'B3'],
	['C1', 'C2', 'C3'],
	['A1', 'B1', 'C1'],
	['A2', 'B2', 'C2'],
	['A3', 'B3', 'C3'],
	['A1', 'B2', 'C3'],
	['A3', 'B2', 'C1'],
];

function handleClickBoard(event) {
	console.log(event);
	event.target.innerText = currentPlayer;
	let boxes = event.target.dataset.box;
	selectionsX.push(boxes)
	console.log(selectionsX);
	
	switchPlayers();
    
}

function checkWinCondition() {

}

function checkTieCondition() {
	// check if there is a tie
}

function switchPlayers() {
	if (currentPlayer === 'X') {
		currentPlayer = 'O';
	} else {
		currentPlayer = 'X';
	}
}

function checkBoxNotOccupied() {
	// determine if the game box that is clicked is empty
}

function startGame() {
	//
}

function turnSequence() {
	// all the things that happen when a user takes a turn
}

function writeMessage(message) {
	//
}
