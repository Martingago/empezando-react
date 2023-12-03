import "./style/App.css";
import { useState } from "react";

const TURNOS = {
  X: "X",
  O: "O",
};

const Square = ({ children, isSelected, updateBoard, index }) => {

  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]



function App() {
  //state del tablero
  const [board, setBoard] = useState(Array(9).fill(null));
  //state de los turnos
  const [turn, setTurn] = useState(TURNOS.X);
  //state del ganador
  const [winner, setWinner] = useState(null);

  // función que comprueba si existe un ganador
  const checkWinner = (boardToCheck) => {
    for(const combo of  WINNER_COMBOS){
      const [a,b,c] = combo;
      if(boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]){
          console.log("Ha ganado:" + boardToCheck[a])
          return boardToCheck[a];
        }
        
    }
    return null;
  }

  const updateBoard = (index) => {
    if(board[index]) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    console.log(newBoard)
    const newTurn = turn === TURNOS.X ? TURNOS.O : TURNOS.X;
    setTurn(newTurn);
    checkWinner(newBoard)
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNOS.X}>{TURNOS.X}</Square>
        <Square isSelected={turn === TURNOS.O}>{TURNOS.O}</Square>
      </section>
    </main>
  );
}

export default App;
