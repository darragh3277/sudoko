import React from "react";
import Header from "./components/header/Header";
import Board from "./components/board/Board";
import "./Reset.css";
import "./Style.css";

export default function Suduko() {
  return (
    <div className="main-wrapper">
      <Header />
      <Board />
    </div>
  );
}
