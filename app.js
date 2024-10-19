const gameBoardElement = document.getElementById("gameBoard");


let gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

function renderBoard() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            gameBoardElement.appendChild(cell);
        }
    }
}

renderBoard();