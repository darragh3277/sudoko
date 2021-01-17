import React from "react";
import Tile from "../tile/Tile";
import Gamebar from "../gamebar/Gamebar";
import "./Style.css";

const BuildBoard = ({ selectedTile, handleClickedTile, gameState, puzzle }) => {
  return (
    <table className="game-board">
      <tbody>
        <BuildRow
          selectedTile={selectedTile}
          handleClickedTile={handleClickedTile}
          gameState={gameState}
          puzzle={puzzle}
        />
      </tbody>
    </table>
  );
};

const BuildRow = ({ selectedTile, handleClickedTile, gameState, puzzle }) => {
  return gameState.map((row, i) => {
    return (
      <tr key={i}>
        <BuildTiles
          tiles={row}
          iRow={i}
          selectedTile={selectedTile}
          handleClickedTile={handleClickedTile}
          gameState={gameState}
          puzzle={puzzle}
        />
      </tr>
    );
  });
};

const BuildTiles = ({
  tiles,
  iRow,
  selectedTile,
  handleClickedTile,
  gameState,
  puzzle,
}) => {
  return tiles.map((value, i) => {
    return (
      <Tile
        key={i}
        iRow={iRow}
        iCol={i}
        value={value}
        selectedTile={selectedTile}
        handleClickedTile={handleClickedTile}
        gameState={gameState}
        puzzle={puzzle}
      />
    );
  });
};

export default function Board({
  handleClickedTile,
  selectedTile,
  gameState,
  handleMiniBoardClick,
  handleNewGame,
  handleReset,
  puzzle,
}) {
  return (
    <div className="board-wrapper">
      <BuildBoard
        selectedTile={selectedTile}
        handleClickedTile={handleClickedTile}
        gameState={gameState}
        puzzle={puzzle}
      />
      <Gamebar
        handleMiniBoardClick={handleMiniBoardClick}
        handleNewGame={handleNewGame}
        handleReset={handleReset}
      />
    </div>
  );
}
