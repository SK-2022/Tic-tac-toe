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

        // currentPlayer: 'X',
        //Other properties and methods can be added as needed


        //Function to check if a cell is empty
        // isCellEmpty(row, col) {
        //     return game.board[row][col].length === 0;
        // }
    }

    // Method to display the current state of the gameboard in the
    //CONSOLE with a pipe dividing the elements on the board.
    function displayBoard() {
        for (let i = 0; i < 9; i += 3) {
            console.log(game.board.slice(i, i + 3).join(' | '))
        }
    }

    //Method to make a move on the gameboard
    //Player represents a potential X or O as a string
    function makeMove(index, player) {
        if (index >= 0 && game.board[index] === null && index < 9) {
            game.board[index] = player;
            return true; //Move successful
        } else {
            return false; //Invalid move
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
                console.log(game.board[a]);
            }
        }
        return null // There is no winner
    }

    //Code for rendering the board onto the page.

    function renderBoard() {
        let boardContainer = document.querySelector(".game-grid-container")
        //Refreshes the container and prevents duplication of player inputs when rendered
        boardContainer.innerHTML = ""
        for (let i = 0; i < game.board.length; i++) {
            let playerInput = game.board[i];
            let gridInputBox = document.createElement('div')
            gridInputBox.innerHTML =
                `<div class="grid-box-${i} grid-box">O</div>`
            boardContainer.appendChild(gridInputBox)
        }
    }

    return {
        game,
        displayBoard,
        makeMove,
        checkWinner,
        renderBoard
    }
}

const ticTacToeGameboard = createTicTacToeGameboard()

ticTacToeGameboard.renderBoard()

