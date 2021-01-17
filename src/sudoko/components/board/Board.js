import React from "react";
import Tile from "../tile/Tile";
import Gamebar from "../gamebar/Gamebar";
import "./Style.css";

const BuildBoard = ({ selectedTile, handleClickedTile, gameState }) => {
  return (
    <table className="game-board">
      <tbody>
        <BuildRow
          selectedTile={selectedTile}
          handleClickedTile={handleClickedTile}
          gameState={gameState}
        />
      </tbody>
    </table>
  );
};

const BuildRow = ({ selectedTile, handleClickedTile, gameState }) => {
  return gameState.map((row, i) => {
    return (
      <tr key={i}>
        <BuildTiles
          tiles={row}
          iRow={i}
          selectedTile={selectedTile}
          handleClickedTile={handleClickedTile}
          gameState={gameState}
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
}) {
  return (
    <div className="board-wrapper">
      <BuildBoard
        selectedTile={selectedTile}
        handleClickedTile={handleClickedTile}
        gameState={gameState}
      />
      <Gamebar
        handleMiniBoardClick={handleMiniBoardClick}
        handleNewGame={handleNewGame}
        handleReset={handleReset}
      />
    </div>
  );
}
