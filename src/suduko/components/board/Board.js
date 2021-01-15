import React from "react";
import Tile from "../tile/Tile";
import Gamebar from "../gamebar/Gamebar";
import "./Style.css";

const game = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [2, 3, 4, 5, 6, 7, 8, 9, 1],
  [5, 6, 7, 8, 9, 1, 2, 3, 4],
  [8, 9, 1, 2, 3, 4, 5, 6, 7],
  [3, 4, 5, 6, 7, 8, 9, 1, 2],
  [6, 7, 8, 9, 1, 2, 3, 4, 5],
  [9, 1, 2, 3, 4, 5, 6, 7, 8],
];

const BuildRow = () => {
  return game.map((row, i) => {
    return (
      <tr key={i}>
        <BuildTiles tiles={row} />
      </tr>
    );
  });
};

const BuildTiles = ({ tiles }) => {
  return tiles.map((value, i) => {
    return <Tile key={i} value={value} />;
  });
};

const BuildBoard = () => {
  return (
    <table className="game-board">
      <tbody>
        <BuildRow />
      </tbody>
    </table>
  );
};

export default function Board() {
  return (
    <div className="board-wrapper">
      <BuildBoard />
      <Gamebar />
    </div>
  );
}
