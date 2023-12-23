  import { WINNER_COMBOS } from "../constants";
  
  // función que comprueba si existe un ganador
  export const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]) {
        console.log("Ha ganado:" + boardToCheck[a]);
        return boardToCheck[a];
      }

    }
    return null;
  }

  export  const checkEndGame = (board) => {
    return board.every((square) => square != null);
  }