import React from "react";
import Button from "../button/Button";
import MiniBoard from "../miniboard/MiniBoard";
import "./Style.css";

export default function Gamebar({
  handleMiniBoardClick,
  handleNewGame,
  handleReset,
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
      </div>
    </div>
  );
}
