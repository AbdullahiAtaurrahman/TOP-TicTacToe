const players = [
  { name: "Player1", sign: "X`", score: 0 },
  { name: "Player2", sign: "o`", score: 0 },
];

function gameBoard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      row.push("");
    }
    board.push(row);
  }
}

function displayController() {}
