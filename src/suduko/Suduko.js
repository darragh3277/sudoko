import React, { useState } from "react";
import Header from "./components/header/Header";
import Board from "./components/board/Board";
import "./Reset.css";
import "./Style.css";

const testGame = [
  [1, 2, null, 4, 5, 6, 7, 8, 9],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [2, 3, 4, 5, 6, 7, 8, 9, 1],
  [5, 6, 7, 8, 9, 1, 2, 3, 4],
  [8, 9, 1, 2, 3, 4, 5, 6, 7],
  [3, 4, 5, 6, 7, 8, 9, 1, 2],
  [6, 7, 8, 9, 1, 2, 3, 4, 5],
  [9, 1, 2, 3, 4, 5, 6, 7, 8],
];

export default function Suduko() {
  const [selectedTile, setSelectedTile] = useState([null, null]);
  const [game, setGame] = useState(testGame);

  const handleMiniBoardClick = (e) => {
    updateTile(e.target.innerText);
  };

  const handleKeyUp = ({ key }) => {
    updateTile(key);
  };

  const updateTile = (val) => {
    //tile must be selected
    if (selectedTile[0] === null || selectedTile[1] === null) return;
    //must be between 1 - 9. 0 Clears
    if (!(val >= 0 && val <= 9)) return;
    if (parseInt(val) === 0) val = null;
    const newGame = [...game];
    const newRow = [...newGame[selectedTile[0]]];
    newRow[selectedTile[1]] = val;
    newGame[selectedTile[0]] = newRow;
    setGame(newGame);
  };

  return (
    <div className="main-wrapper" tabIndex={-1} onKeyUp={handleKeyUp}>
      <Header />
      <Board
        selectedTile={selectedTile}
        handleClickedTile={setSelectedTile}
        handleMiniBoardClick={handleMiniBoardClick}
        game={game}
      />
    </div>
  );
}
