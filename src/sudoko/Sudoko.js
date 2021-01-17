import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Board from "./components/board/Board";
import "./Reset.css";
import "./Style.css";

let puzzle = null;

export default function Sudoko() {
  const [selectedTile, setSelectedTile] = useState();
  const [gameState, setGameState] = useState();
  const [gameComplete, setGameComplete] = useState(false);

  const loadGame = (random) => {
    fetch("games.json")
      .then((res) => {
        return res.json();
      })
      .then((games) => {
        puzzle = games[random];
        setGameState([...puzzle]);
      });
  };

  useEffect(() => {
    const random = Math.floor(Math.random() * (100000 - 1) + 1);
    loadGame(random);
  }, []);

  const handleNewGame = () => {
    const random = Math.floor(Math.random() * (100000 - 1) + 1);
    setGameComplete(false);
    loadGame(random);
  };

  const handleReset = () => {
    setGameComplete(false);
    setGameState([...puzzle]);
  };

  const handleMiniBoardClick = (e) => {
    updateTile(parseInt(e.target.innerText));
  };

  const handleKeyUp = ({ key, keyCode }) => {
    //if button pressed is delete or backspace set = 0
    if (keyCode === 8 || keyCode === 46) key = 0;
    //only numeric values allowed
    if (isNaN(key)) return;
    updateTile(parseInt(key));
  };

  const isUpdatableTile = () => {
    if (puzzle[selectedTile[0]][selectedTile[1]] !== 0) return false;
    return true;
  };

  const checkComplete = () => {
    let complete = true;
    gameState.forEach((row) => {
      row.forEach((value) => {
        if (value === 0) complete = false;
      });
    });
    setGameComplete(complete);
  };

  const updateTile = (val) => {
    //tile must be selected
    if (!selectedTile || selectedTile[0] === null || selectedTile[1] === null)
      return;
    if (!isUpdatableTile()) return;
    if (gameComplete) return;
    const newGameState = [...gameState];
    const newRow = [...newGameState[selectedTile[0]]];
    newRow[selectedTile[1]] = val;
    newGameState[selectedTile[0]] = newRow;
    setGameState(newGameState);
    checkComplete();
  };
  return (
    <div className="main-wrapper" tabIndex={-1} onKeyUp={handleKeyUp}>
      <Header />
      {puzzle && (
        <Board
          selectedTile={selectedTile}
          handleClickedTile={setSelectedTile}
          handleMiniBoardClick={handleMiniBoardClick}
          handleNewGame={handleNewGame}
          handleReset={handleReset}
          gameState={gameState}
          puzzle={puzzle}
          gameComplete={gameComplete}
        />
      )}
    </div>
  );
}
