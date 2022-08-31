const Gameboard = () => {
    let _gameBoard = ["", "", "", "", "", "", "", "", ""];
    const _makeBoard = () => {
        let boardPos = 0;
        const boardDiv = document.querySelectorAll(".board-div");

          boardDiv.forEach(boardDiv => {           
         boardDiv.classList = "board-div";
               // const boardDiv = document.createElement("div");
                boardDiv.textContent = _gameBoard[boardPos];
                boardDiv.setAttribute("data-board-pos", `${boardPos}`);
                boardPos++;
                
                //this.gB();
                //_gameBoard.push(boardDiv);
                //gb().appendChild(boardDiv);
                //this.gB.appendChild(boardDiv);
                boardDiv.addEventListener("click", playerMove);
        });
        //displayGame();
    };
    const displayGame = () => {
        document.body.appendChild(gb());
    }
    const gb = () => {
        return document.querySelector(".game-board");
}

let marker = "";

    const Player = (name) => {
        const getName = () => name;
        console.log(name);
        const p1 = document.querySelector(".p1");
            const p2 = document.querySelector(".p2");

     if (p1.textContent === "") {
        p1.textContent = getName();
        return;
    }
       if (p2.textContent === "") {
        p2.textContent = getName();
        return;
    }

     const playerTurn = player => {
            player === "O" || player === "" ? marker = "X" : marker = "O";
            return marker;
        }
    return { playerTurn};
    }

    
    const playerMove = (e) => {
        const markerPos = e.target;
        if (markerPos.dataset.clicked === "true") return;
         const player = Player();
         _gameBoard[markerPos.dataset.boardPos] = player.playerTurn(marker);

        for (let i = 0; i < _gameBoard.length; i++) {
            if (_gameBoard[i] === "X" || _gameBoard[i] === "O") {
                const markedDiv = document.querySelector(`[data-board-pos= "${i}"]`);
                markedDiv.setAttribute("data-clicked", "true");
                 markedDiv.textContent = _gameBoard[i];
                 console.log(_gameBoard);
                gb().replaceChild(markedDiv, gb().children[i]);
            } displayGame();
        }        
    };
    return {_makeBoard, _gameBoard, Player};
}
const w = Gameboard();
w._makeBoard();
const jay = Gameboard();
w.Player("p1");
jay.Player("p2");
//console.log(w._gameBoard);
