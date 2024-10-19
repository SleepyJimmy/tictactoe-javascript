const gameBoardElement = document.getElementById("gameBoard");


function gameBoard() {
    const board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    const renderBoard = () => {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.dataset.row = row;
                cell.dataset.col = col;
                cell.textContent = board[row][col];
                gameBoardElement.appendChild(cell);
            }
        }
    };

    const addEntry = (row, col, marker) => {
        if (board[row][col] === "") {
            board[row][col] = marker;
        } else {
            alert("Cell already taken!");
        }
        renderBoard();
    }
    return {board, renderBoard, addEntry};
}


function player(name, marker) {
    return {name, marker};
}


const board = gameBoard();
board.renderBoard();
