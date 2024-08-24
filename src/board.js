import { markPathOnBoard } from "./DOMelements";

let knightMovesList = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
];

function isOutofBoard(row, column) {
  return row < 0 || row > 7 || column < 0 || column > 7;
}

function knightMoves(start, end) {
  const queue = [[start, [start]]];
  const visited = new Set([String(start)]);

  while (queue.length) {
    let [current, path] = queue.shift();
    if (current.toString() === end.toString()) printMovesPath(path);

    for (let [directionRow, directionColumn] of knightMovesList) {
      let row = current[0] + directionRow;
      let column = current[1] + directionColumn;
      let move = [row, column];

      if (!isOutofBoard(row, column) && !visited.has(move.toString())) {
        visited.add(move.toString());
        queue.push([move, path.concat([move])]);
      }
    }
  }
}

function printMovesPath(paths) {
  console.log(`You made it in ${paths.length}! Here's your path:`);
  for (let path of paths) {
    console.log(path);
  }
  markPathOnBoard(paths);
}

// let test = new gameBoard();

// test.createGameBoard();

export { knightMoves };
