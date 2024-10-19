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


function gameLogic(board, player1, player2) {
    currentPlayer = player1;

    const cells = document.getElementsByClassName("cell");
    Array.from(cells).forEach((cell) => {
        cell.addEventListener("click", function() {
            const row = cell.dataset.row;
            const col = cell.dataset.col;

            board.addEntry(row, col, currentPlayer.marker)
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        })
    })
}

const board = gameBoard();
const player1 = player("john", "X");
const player2 = player("jill", "O");
board.renderBoard();
gameLogic(board, player1, player2);