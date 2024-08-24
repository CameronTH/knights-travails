import { knightMoves } from "./board";

function createGameBoard() {
  let container = document.querySelector(".board-container");
  let counter = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let space = document.createElement("div");
      space.classList.add("space");
      if (counter % 2) space.classList.add("space-secondary");
      space.textContent = `${i}, ${j}`;
      space.dataset.id = `${i},${j}`;
      space.addEventListener("click", selectStartAndEnd);
      container.append(space);
      counter += 1;
    }
    counter += 1;
  }
}

let startPosition;
let endPosition;

function selectStartAndEnd(e) {
  let element = e.target;
  let status = document.querySelector(".status");

  if (!startPosition) {
    let split = element.textContent.split(",");
    startPosition = [Number(split[0]), Number(split[1])];
    element.classList.add("space-start");
    status.textContent = "Select a end position.";
  } else if (!endPosition && element.textContent !== startPosition) {
    let split = element.textContent.split(",");
    endPosition = [Number(split[0]), Number(split[1])];
    element.classList.add("space-end");
  }

  if (endPosition && startPosition) {
    status.textContent = "";
    knightMoves(startPosition, endPosition);
  }
}

function markPathOnBoard(paths) {
  for (let i = 0; i < paths.length; i++) {
    let element = document.querySelector(`[data-id="${String(paths[i])}"]`);
    element.classList.add("space-start");
  }
}

function cleanGameBoard() {
  let container = document.querySelector(".board-container");
  let status = document.querySelector(".status");
  container.replaceChildren();
  status.textContent = "Select a start position.";
  startPosition = undefined;
  endPosition = undefined;
  createGameBoard();
}

function addResetButtonListener() {
  let button = document.querySelector(".reset-button");
  button.addEventListener("click", cleanGameBoard);
}
createGameBoard();
addResetButtonListener();

export { createGameBoard, markPathOnBoard };
