import React from "react";
import Tile from "../tile/Tile";
import Gamebar from "../gamebar/Gamebar";
import "./Style.css";

const BuildBoard = ({ selectedTile, handleClickedTile, game }) => {
  return (
    <table className="game-board">
      <tbody>
        <BuildRow
          selectedTile={selectedTile}
          handleClickedTile={handleClickedTile}
          game={game}
        />
      </tbody>
    </table>
  );
};

const BuildRow = ({ selectedTile, handleClickedTile, game }) => {
  return game.map((row, i) => {
    return (
      <tr key={i}>
        <BuildTiles
          tiles={row}
          iRow={i}
          selectedTile={selectedTile}
          handleClickedTile={handleClickedTile}
        />
      </tr>
    );
  });
};

const BuildTiles = ({ tiles, iRow, selectedTile, handleClickedTile }) => {
  return tiles.map((value, i) => {
    return (
      <Tile
        key={i}
        iRow={iRow}
        iCol={i}
        value={value}
        selectedTile={selectedTile}
        handleClickedTile={handleClickedTile}
      />
    );
  });
};

export default function Board({
  handleClickedTile,
  selectedTile,
  game,
  handleMiniBoardClick,
}) {
  return (
    <div className="board-wrapper">
      <BuildBoard
        selectedTile={selectedTile}
        handleClickedTile={handleClickedTile}
        game={game}
      />
      <Gamebar handleMiniBoardClick={handleMiniBoardClick} />
    </div>
  );
}
