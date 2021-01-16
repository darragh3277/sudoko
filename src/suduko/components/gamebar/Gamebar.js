import React from "react";
import Button from "../button/Button";
import "./Style.css";

export default function Gamebar() {
  return (
    <div className="gamebar">
      <div className="game-tools">d</div>
      <div className="game-buttons">
        <Button type="btn-primary" size="sm">
          Check
        </Button>
        <Button type="btn-secondary" size="sm">
          New Game
        </Button>
      </div>
    </div>
  );
}
