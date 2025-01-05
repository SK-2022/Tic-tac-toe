//I chose to use a one dimensional array because it was easier for me.

//Lets now apply this to tic-tac-toe.
function createTicTacToeGameboard() {
    //Object to be returned
    const game = {
        //Each 'null' represents a cell on the board that will be filled with 'X's and 'O's from both players
        //Can also be 'const board = Array(9).fill(null) '
        board:
            [null, null, null,
                null, null, null,
                null, null, null],

        //Initialized the current player in the game
        currentPlayer: 'X',

    }




    //Method to make a move on the gameboard
    //Player represents a potential X or O as a string
    //CONSOLE

    function cellClicked(cell) {
        // Check if the cell is empty before making a move
        if (cell.innerText === '') {
            // Update the cell with the current player's symbol (X or O)
            cell.innerText = currentPlayer;

            // Check for a winner or a tie after the move
            checkWinner();

            // Switch to the next player's turn
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

            const inputBoxes = document.querySelectorAll('.grid-box')
            inputBoxes.forEach(cell => {
                cell.addEventListener('click', () => cellClicked(cell))
            })
        }
    }

        function checkWinner() {
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
                [0, 4, 8], [2, 4, 6]             // Diagonals
            ];

            for (const pattern of winPatterns) {
                const [a, b, c] = pattern; //Using destructuring. A,B and C represent the indices that all have a player move of O or X
                if (game.board[a] !== null && game.board[a] === game.board[b] && game.board[b] === game.board[c]) { //Checks if a, b and c are all equal.
                    console.log('The winner is.....');
                } else {
                    console.log('Its a tie!') // Its a tie
                }
            }
        }

        //Code for rendering the board onto the page.

        function renderBoard() {
            let boardContainer = document.querySelector(".game-grid-container")
            //Refreshes the container and prevents duplication of player inputs when rendered
            boardContainer.innerHTML = ""
            for (let i = 0; i < game.board.length; i++) {
                let gridInputBox = document.createElement('div')
                gridInputBox.innerHTML =
                    `<div class="grid-box-${i} grid-box onclick="ticTacToeGameboard.cellClicked(this)"></div>`
                boardContainer.appendChild(gridInputBox)
            }
        }

        return {
            game,
            cellClicked,
            checkWinner,
            renderBoard,
            cellClicked
        }
}
const ticTacToeGameboard = createTicTacToeGameboard()

ticTacToeGameboard.renderBoard()
ticTacToeGameboard.cellClicked()
