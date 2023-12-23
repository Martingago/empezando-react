import "./style/App.css";
import { useState } from "react";
import { Square } from "../components/Square";
import { TURNOS } from "../constants";
import { checkWinner, checkEndGame } from "../logic/board";
import confetti from "canvas-confetti";
import { WinnerModal } from "../components/WinnerModal";

function App() {
  //state del tablero
  const [board, setBoard] = useState(Array(9).fill(null));
  //state de los turnos
  const [turn, setTurn] = useState(TURNOS.X);
  //state del ganador
  const [winner, setWinner] = useState(null);


  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === TURNOS.X ? TURNOS.O : TURNOS.X;
    setTurn(newTurn);
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
   
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNOS.X);
    setWinner(null);
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reiniciar partida</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNOS.X}>{TURNOS.X}</Square>
        <Square isSelected={turn === TURNOS.O}>{TURNOS.O}</Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
    </main>
  );
}

export default App;
