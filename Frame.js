class Frame {
  constructor() {
    this.turnOne = 0;
    this.turnTwo = 0;
    this.score = 0;

    this.strike = 0;
    this.spare = 0;
  }

  setTurns(first, second) {
    this.turnOne = first;
    this.turnTwo = second;
  }
}

module.exports = Frame;
