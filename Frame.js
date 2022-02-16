class Frame {
  constructor(turns) {
    let { f, s, t } = turns;
    this.turnOne = f;
    this.turnTwo = s;
    this.turnThree = t;
    this.score = 0;
    this.shotType = this.getType();
  }

  setTurns(first, second) {
    this.turnOne = first;
    this.turnTwo = second;
  }

  getType() {
    let sum = this.turnOne + this.turnTwo;
    let type = 'normal';
    if (this.turnOne == 10) {
      type = 'strike';
    } else if (sum == 10) {
      type = 'spare';
    }

    return type;
  }
  // calculateScore() {
  //   let turnOne = this.turnOne;
  //   let turnTwo = this.turnTwo;

  //   return turnOne + turnTwo;
  // }
}

module.exports = Frame;
