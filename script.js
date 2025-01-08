//Console Game - Just focused on the logic of the game
//Use a 1 dimensional array because its easier to implement.
//I am using a regular object first. Later I will refactor and see how this works with a factory function.
// const gameBoard = {
//     board: [null, null, null,
//             null, null, null,
//             null, null, null
//         ],
//     currentPlayer: 'X', 
//     resetBoard() {
//         this.board.fill(null)
//     },
    
   
//     //Logic for making a move on the board
//     //Make sure a player 1 cannot override player 2's move and vice versa.
//     makeMove(index){
//         if (this.board[index] === null){
//             this.board[index] = this.currentPlayer; // Assigns the index as X if there was nothing in the index
//             this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'; // Changes the player if the current player is X or O. 
//         } 
//         this.printBoard()
//         this.checkWinner()
//     },

//   //Prints the board on the console 
//   printBoard() {
//     console.log(this.board)
// },

//   //All the winning combos
//     winningCombinations : [
//         [0, 1, 2], // Top row
//         [3, 4, 5], // Middle row
//         [6, 7, 8], // Bottom row
//         [0, 3, 6], // Left column
//         [1, 4, 7], // Middle column
//         [2, 5, 8], // Right column
//         [0, 4, 8], // Top-left to bottom-right diagonal
//         [2, 4, 6]  // Top-right to bottom-left diagonal
//     ],


//     //Checks who has won or if there's a tie(NO WINNER) and logs the winner on the console.
//     //An unintended consequence of this is that after X or O wins, the loser will start the next round. 
//       checkWinner() {
//         for(const [a, b, c] of this.winningCombinations) { //iterates over the indices in winning combos
//             const [ValueA, ValueB, ValueC] = [this.board[a], this.board[b], this.board[c]] //Using destructing to assign the current values on gameboard indices a, b and c to ValueA, ValueB and ValueC respectively.
            
//             if(ValueA && ValueA === ValueB && ValueA === ValueC){ //Checks if all the positions are filled with the same X or O and make sure its not null.
//                 console.log(`${ValueA} is the winner!`)
//                 this.resetBoard() //Reset the board when the winner is found
//                 return;//This is added to STOP the ENTIRE function. 'Break' would be for stopping the current iteration of the loop but allow the function to continue executing
//             }
//         }
        
//         //Checks if every cell is NOT null(empty) and resets the board after a tie is logged on the console.
//         if(this.board.every(cell => cell !== null)) {
//             console.log("It's a tie!")
//             this.resetBoard();
//         }
//       } 
    
// };

//DOM Game with UI elements and interaction created with the above logic
const gameBoard = {
    board: [null, null, null,
            null, null, null,
            null, null, null
        ],
    currentPlayer: 'X', 
    resetBoard() {
        this.board.fill(null)
    },
    
   
    //Logic for making a move on the board
    //Make sure a player 1 cannot override player 2's move and vice versa.
    makeMove(index){
        if (this.board[index] === null){
            this.board[index] = this.currentPlayer; // Assigns the index as X if there was nothing in the index
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'; // Changes the player if the current player is X or O. 
        } 
        this.printBoard()
        this.checkWinner()
    },

  //Prints the board on the console 
  printBoard() {
    console.log(this.board)
},

  //All the winning combos
    winningCombinations : [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Top-left to bottom-right diagonal
        [2, 4, 6]  // Top-right to bottom-left diagonal
    ],


    //Checks who has won or if there's a tie(NO WINNER) and logs the winner on the console.
    //An unintended consequence of this is that after X or O wins, the loser will start the next round. 
      checkWinner() {
        for(const [a, b, c] of this.winningCombinations) { //iterates over the indices in winning combos
            const [ValueA, ValueB, ValueC] = [this.board[a], this.board[b], this.board[c]] //Using destructing to assign the current values on gameboard indices a, b and c to ValueA, ValueB and ValueC respectively.
            
            if(ValueA && ValueA === ValueB && ValueA === ValueC){ //Checks if all the positions are filled with the same X or O and make sure its not null.
                console.log(`${ValueA} is the winner!`)
                this.resetBoard() //Reset the board when the winner is found
                return;//This is added to STOP the ENTIRE function. 'Break' would be for stopping the current iteration of the loop but allow the function to continue executing
            }
        }
        
        //Checks if every cell is NOT null(empty) and resets the board after a tie is logged on the console.
        if(this.board.every(cell => cell !== null)) {
            console.log("It's a tie!")
            this.resetBoard();
        }
      } 
    
};