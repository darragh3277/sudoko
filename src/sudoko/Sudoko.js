import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Board from "./components/board/Board";
import "./Reset.css";
import "./Style.css";

let puzzle = null;

let testPuzzle = [
  [7, 8, 6, 2, 1, 3, 4, 5, 9],
  [5, 9, 4, 6, 8, 7, 3, 2, 1],
  [1, 3, 2, 9, 5, 4, 8, 6, 7],
  [3, 4, 7, 8, 2, 9, 5, 1, 6],
  [8, 5, 9, 4, 6, 1, 7, 3, 2],
  [2, 6, 1, 3, 7, 5, 9, 4, 8],
  [4, 2, 3, 1, 9, 8, 6, 7, 5],
  [6, 7, 8, 5, 4, 2, 1, 9, 3],
  [9, 1, 5, 7, 3, 0, 2, 8, 0], //6 & 4
];

export default function Sudoko() {
  const [selectedTile, setSelectedTile] = useState();
  const [gameState, setGameState] = useState();
  const [gameComplete, setGameComplete] = useState(false);
  const [gameTimer, setGameTimer] = useState(0);

  const loadGame = (random) => {
    fetch("games.json")
      .then((res) => {
        return res.json();
      })
      .then((games) => {
        // puzzle = testPuzzle; //for test
        puzzle = games[random];
        setGameState([...puzzle]);
        setGameTimer(0);
      });
  };

  useEffect(() => {
    const random = Math.floor(Math.random() * (100000 - 1) + 1);
    loadGame(random);
    setInterval(() => {
      setGameTimer((gameTimer) => gameTimer + 1);
    }, 1000);
  }, []);

  const handleNewGame = () => {
    const random = Math.floor(Math.random() * (100000 - 1) + 1);
    setGameComplete(false);
    loadGame(random);
  };

  const handleReset = () => {
    setGameTimer(0);
    setGameComplete(false);
    setGameState([...puzzle]);
  };

  const handleMiniBoardClick = (e) => {
    let val = e.target.innerText;
    if (val === "x") val = 0;
    updateTile(parseInt(val));
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

  const checkComplete = (gameState) => {
    let complete = true;
    //check no values left
    gameState.forEach((row) => {
      row.forEach((value) => {
        if (value === 0) complete = false;
      });
    });
    //TODO move tile conflict checks up to here
    //check no conflicts
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
    checkComplete(newGameState);
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
          gameTimer={gameTimer}
        />
      )}
    </div>
  );
}
