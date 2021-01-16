import React from "react";
import Button from "../button/Button";
import "./Style.css";

export default function Gamebar() {
  return (
    <div className="gamebar">
      <Button type="btn-primary" size="sm">
        Check
      </Button>
      <Button type="btn-secondary" size="sm">
        New Game
      </Button>
    </div>
  );
}
