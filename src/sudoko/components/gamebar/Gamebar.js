import React from "react";
import Button from "../button/Button";
import MiniBoard from "../miniboard/MiniBoard";
import "./Style.css";

export default function Gamebar({ handleMiniBoardClick, handleNewGame }) {
  return (
    <div className="gamebar">
      <div className="game-tools">
        <MiniBoard handleMiniBoardClick={handleMiniBoardClick} />
      </div>
      <div className="game-buttons">
        <Button type="btn-primary" size="sm">
          Check
        </Button>
        <Button type="btn-secondary" size="sm" handleClick={handleNewGame}>
          New Game
        </Button>
      </div>
    </div>
  );
}
