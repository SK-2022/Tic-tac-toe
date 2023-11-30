// 2D array = multi-dimensional array that stores a matrix of data in 
//             rows and columns.
//             Useful for games, spreadsheets or representing images

//An example matrix

const matrix = [[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]]

//Lets now apply this to tic-tac-toe
function createTicTacToeGame() {
    const game = {
        //Each 'null' represents a cell on the board
        board : [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ],

        currentPlayer: 'X',
        //Other properties and methods can be added as needed

        //Function to check if a cell is empty
        isCellEmpty(row, col) {
            return game.board[row][col].length === 0;
        }
    }

}

console.log(ticTacToeGame.board)