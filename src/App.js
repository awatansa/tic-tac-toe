import Square from "components/Square";
import { useGame } from "hooks";
import "App.css";

function App() {
  const { gameState, handleClick, isDisabled, reset } = useGame();
  const { matrix, currentPlayer, winner } = gameState;

  console.log(matrix);

  return (
    <div className={`app ${currentPlayer ? "light" : "dark"}`}>
      <h2>Player {currentPlayer ? "1" : "2"}</h2>
      <div className="container">
        <div className="row">
          <div className="col">
            <Square
              name={"00"}
              onClick={handleClick}
              value={matrix[0][0]}
              disabled={isDisabled("00")}
            />
          </div>
          <div className="col">
            <Square
              name={"01"}
              onClick={handleClick}
              value={matrix[0][1]}
              disabled={isDisabled("01")}
            />
          </div>
          <div className="col">
            <Square
              name={"02"}
              onClick={handleClick}
              value={matrix[0][2]}
              disabled={isDisabled("02")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Square
              name={"10"}
              onClick={handleClick}
              value={matrix[1][0]}
              disabled={isDisabled("10")}
            />
          </div>
          <div className="col">
            <Square
              name={"11"}
              onClick={handleClick}
              value={matrix[1][1]}
              disabled={isDisabled("11")}
            />
          </div>
          <div className="col">
            <Square
              name={"12"}
              onClick={handleClick}
              value={matrix[1][2]}
              disabled={isDisabled("12")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Square
              name={"20"}
              onClick={handleClick}
              value={matrix[2][0]}
              disabled={isDisabled("20")}
            />
          </div>
          <div className="col">
            <Square
              name={"21"}
              onClick={handleClick}
              value={matrix[2][1]}
              disabled={isDisabled("21")}
            />
          </div>
          <div className="col">
            <Square
              name={"22"}
              onClick={handleClick}
              value={matrix[2][2]}
              disabled={isDisabled("22")}
            />
          </div>
        </div>
      </div>
      <div>
        {winner === "true" ? "Player 1 is Winner" : ""}
        {winner === "false" ? "Player 2 is Winner" : ""}
      </div>
      <div>
        <button className="button-1" onClick={reset}>
          RESET
        </button>
      </div>
    </div>
  );
}

export default App;
