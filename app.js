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
            const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
            cell.textContent = board[row][col];
            
        } else {
            alert("Cell already taken!");
        }
        isGameOver();
    }

    const isGameOver = () => {
        if (!board || board.length !== 3 || board.some(row => row.length !== 3)) {
            return 
        }
        // check rows
        for (let row = 0; row < 3; row++) {
            if (board[row][0] !== "" && board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
                alert(`${board[row][0]} wins!`)
            }
        }

        // check columns
        for (let col = 0; col < 3; col++) {
            if (board[0][col] !== "" && board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
                alert(`${board[0][col]} wins!`)
            }
        }

        // check diagonals
        if (board[0][0] !== "" && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            alert(`${board[0][0]} wins!`);
        }
    
        if (board[0][2] !== "" && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
            alert(`${board[0][2]} wins!`);
        }
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