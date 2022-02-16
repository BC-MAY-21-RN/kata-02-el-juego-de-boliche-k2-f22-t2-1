const Frame = require('./Frame');

class Board {
  constructor() {
    this.frames = 10;
    this.board = this.fillBoard();
    this.setScores();
  }

  createBoard() {
    return new Array(this.frames);
  }

  fillBoard() {
    let board = this.createBoard();
    for (let i = 0; i < board.length; i++) {
      board[i] = new Frame();
    }
    return board;
  }

  setScores() {
    this.board[0].setTurns(1, 4);
    this.board[1].setTurns(4, 5);
    this.board[2].setTurns(6, 4);
    this.board[3].setTurns(5, 5);
    this.board[4].setTurns(10, 0);
    this.board[5].setTurns(0, 1);
    this.board[6].setTurns(7, 3);
    this.board[7].setTurns(6, 4);
    this.board[8].setTurns(10, 0);
    this.board[9].setTurns(2, 6);
  }
}

module.exports = Board;
