import { useState } from "react";

export function useGame() {
  const [gameState, setGameState] = useState({
    matrix: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    currentPlayer: true,
    winner: "",
  });

  function handleClick(event) {
    // collect current data
    const { matrix, currentPlayer } = gameState;
    const [x, y] = event.target.name.split("");

    // create new temporary data
    const newState = {
      matrix: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      currentPlayer: undefined,
      winner: "",
    };
    const newMatrix = [[...matrix[0]], [...matrix[1]], [...matrix[2]]];
    let newWinner = "";

    // update data
    newMatrix[x][y] = currentPlayer.toString();

    // calculate winner
    for (let i = 0; i <= 2; i++) {
      if (
        newMatrix[i][0] !== "" &&
        newMatrix[i][1] !== "" &&
        newMatrix[i][2] !== ""
      ) {
        if (
          newMatrix[i][0] === newMatrix[i][1] &&
          newMatrix[i][1] === newMatrix[i][2]
        ) {
          newWinner = currentPlayer.toString();
        }
      }
      if (
        newMatrix[0][i] !== "" &&
        newMatrix[1][i] !== "" &&
        newMatrix[2][i] !== ""
      ) {
        if (
          newMatrix[0][i] === newMatrix[1][i] &&
          newMatrix[1][i] === newMatrix[2][i]
        ) {
          newWinner = currentPlayer.toString();
        }
      }
    }
    if (
      newMatrix[0][0] === newMatrix[1][1] &&
      newMatrix[1][1] === newMatrix[2][2] &&
      newMatrix[0][0] !== "" &&
      newMatrix[1][1] !== "" &&
      newMatrix[2][2] !== ""
    ) {
      console.log("condition 2");
      newWinner = currentPlayer.toString();
    }
    if (
      newMatrix[0][2] === newMatrix[1][1] &&
      newMatrix[1][1] === newMatrix[2][0] &&
      newMatrix[0][2] !== "" &&
      newMatrix[1][1] !== "" &&
      newMatrix[2][0] !== ""
    ) {
      console.log("condition 3");
      newWinner = currentPlayer.toString();
    }

    // create new state and setState
    newState.matrix = newMatrix;
    newState.currentPlayer = newWinner === "" ? !currentPlayer : currentPlayer;
    newState.winner = newWinner;
    console.log(newState);
    setGameState(newState);
  }

  function isDisabled(xy) {
    const [x, y] = xy.split("");
    if (gameState.winner !== "") return true;
    if (gameState.matrix[x][y] !== "") return true;
    return false;
  }

  function reset() {
    setGameState({
      matrix: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      currentPlayer: true,
      winner: "",
    });
  }

  return { gameState, handleClick, isDisabled, reset };
}
