export class Board {
  constructor() {
    this.board = new Array(8).fill(new Array(8).fill(0));
  }
}

let board = new Board();

console.log(board);
