import React from "react";
import Button from "../button/Button";
import MiniBoard from "../miniboard/MiniBoard";
import "./Style.css";

const displayGameTimer = (gameTimer) => {
  const mins = Math.floor(gameTimer / 60);
  let secs = gameTimer % 60;
  if (secs < 10) secs = "0" + secs;
  return mins + ":" + secs;
};

export default function Gamebar({
  handleMiniBoardClick,
  handleNewGame,
  handleReset,
  gameTimer,
}) {
  return (
    <div className="gamebar">
      <div className="game-tools">
        <MiniBoard handleMiniBoardClick={handleMiniBoardClick} />
      </div>
      <div className="game-buttons">
        <Button type="btn-primary" size="sm" handleClick={handleNewGame}>
          New Game
        </Button>
        <Button type="btn-secondary" size="sm" handleClick={handleReset}>
          Solve
        </Button>
        <Button type="btn-secondary" size="sm" handleClick={handleReset}>
          Reset
        </Button>
        <div className="game-timer">Time: {displayGameTimer(gameTimer)}</div>
      </div>
    </div>
  );
}
