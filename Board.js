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

  printBoard() {
    let b = this.board;
    console.log(
      '_____________________________________________________________'
    );
    console.log(
      '|__1__|__2__|__3__|__4__|__5__|__6__|__7__|__8__|__9__|__10___|'
    );

    let turnsString = '';
    let scoreString = '';
    for (let i = 0; i < b.length; i++) {
      turnsString += `|  ${b[i].turnOne == 10 ? ' ' : b[i].turnOne}|${
        b[i].shotType == 'spare'
          ? '/'
          : b[i].shotType == 'strike'
          ? 'X'
          : b[i].turnTwo
      }`;
      if (i == 9) {
        turnsString += `|${b[i].turnThree}|`;
      }
      scoreString += `|  ${b[i].score} `;
    }
    console.log(turnsString);
    console.log(scoreString);
    console.log(
      "-----'-----'-----'-----'-----'-----'-----'-----'-----'---------"
    );
  }
}

module.exports = Board;
