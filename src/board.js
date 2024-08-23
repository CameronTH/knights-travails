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
  let counter = 0;

  while (counter < 10) {
    let [current, path] = queue.shift();
    console.log(current);
    if (current.toString() === end.toString()) return path;

    for (let [directionRow, directionColumn] of knightMovesList) {
      let row = current[0] + directionRow;
      let column = current[1] + directionColumn;
      let move = [row, column];

      if (!isOutofBoard(row, column) && !visited.has(move.toString())) {
        visited.add(move.toString());
        queue.push([move, path.concat([move])]);
      }
    }

    counter++;
  }
}

console.log(knightMoves([0, 0], [3, 1]));
