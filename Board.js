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
    let scores = [
      { f: 1, s: 4 },
      { f: 4, s: 5 },
      { f: 6, s: 4 },
      { f: 5, s: 5 },
      { f: 10, s: 0 },
      { f: 0, s: 1 },
      { f: 7, s: 3 },
      { f: 6, s: 4 },
      { f: 10, s: 0 },
      { f: 2, s: 6 },
    ];

    let board = this.createBoard();
    for (let i = 0; i < board.length; i++) {
      board[i] = new Frame(scores[i]);
    }
    return board;
  }
}

module.exports = Board;
