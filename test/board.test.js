/* eslint-disable no-undef */
const Board = require('../Board');

let board = new Board();
let lengthBoard = board.board.length;
let lastFrame = board.board[lengthBoard - 1];
describe('Test on the class Board', () => {
  test('should the board have 10 frames to play ', () => {
    expect(lengthBoard).toBe(10);
  });
  test('should return the correct score', () => {
    expect(lastFrame.score).toBe(133);
  });
});
