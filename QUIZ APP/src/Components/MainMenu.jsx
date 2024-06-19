import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../Helper/Contexts";

function Menu() {
  const { gameState, setGameState, userName, setUserName } =
    useContext(GameStateContext);
  return (
    <div className="Menu">
      <label>Enter Your Name:</label>
      <input
        type="text"
        placeholder="Ex. William Smith"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setGameState("playing");
        }}
        id="nextQuestion"
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Menu;
