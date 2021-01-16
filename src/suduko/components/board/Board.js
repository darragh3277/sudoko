import React, { useState } from "react";
import Tile from "../tile/Tile";
import Gamebar from "../gamebar/Gamebar";
import "./Style.css";

const game = [
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

const BuildRow = ({ selectedTile, handleSelectedTile }) => {
  return game.map((row, i) => {
    return (
      <tr key={i}>
        <BuildTiles
          tiles={row}
          iRow={i}
          selectedTile={selectedTile}
          handleSelectedTile={handleSelectedTile}
        />
      </tr>
    );
  });
};

const BuildTiles = ({ tiles, iRow, selectedTile, handleSelectedTile }) => {
  return tiles.map((value, i) => {
    return (
      <Tile
        key={i}
        iRow={iRow}
        iCol={i}
        value={value}
        selectedTile={selectedTile}
        handleSelectedTile={handleSelectedTile}
      />
    );
  });
};

const BuildBoard = ({ selectedTile, handleSelectedTile }) => {
  return (
    <table className="game-board">
      <tbody>
        <BuildRow
          selectedTile={selectedTile}
          handleSelectedTile={handleSelectedTile}
        />
      </tbody>
    </table>
  );
};

export default function Board() {
  const [selectedTile, setSelectedTile] = useState([null, null]);

  return (
    <div className="board-wrapper">
      <BuildBoard
        selectedTile={selectedTile}
        handleSelectedTile={setSelectedTile}
      />
      <Gamebar />
    </div>
  );
}
