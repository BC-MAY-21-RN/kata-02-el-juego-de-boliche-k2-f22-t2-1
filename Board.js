const Frame = require('./Frame');

class Board {
  constructor() {
    this.frames = 10;
    this.board = this.fillBoard();
    // this.setScores();
    this.calculateScore();
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
      { f: 2, s: 8, t: 6 },
    ];

    let board = this.createBoard();
    for (let i = 0; i < board.length; i++) {
      board[i] = new Frame(scores[i]);
    }
    return board;
  }

  calculateScore() {
    let board = this.board;
    let scoreSum = 0;
    for (let i = 0; i < board.length; i++) {
      let turnOne = board[i].turnOne;
      let turnTwo = board[i].turnTwo;
      let shotType = board[i].shotType;
      if (shotType == 'normal') {
        scoreSum += turnOne + turnTwo;
        board[i].score = scoreSum;
      } else if (shotType == 'spare') {
        if (i == 9) {
          let spareBonus = this.board[i].turnThree;
          scoreSum += turnOne + turnTwo + spareBonus;
          board[i].score = scoreSum;
        } else {
          let spareBonus = this.board[i + 1].turnOne;
          scoreSum += turnOne + turnTwo + spareBonus;
          board[i].score = scoreSum;
        }
      } else {
        let strikeBonus = this.board[i + 1].turnOne + this.board[i + 1].turnTwo;
        scoreSum += turnOne + strikeBonus;
        board[i].score = scoreSum;
      }
    }
  }
}

module.exports = Board;
