import React from "react";
import "./Style.css";

//get the boundary of the selected tiles grid
const getGridBoundary = (selectedTile) => {
  const row = selectedTile[0];
  const col = selectedTile[1];
  let rowBoundary = [0, 2];
  let colBoundary = [0, 2];
  if (row >= 3 && row <= 6) {
    rowBoundary = [3, 5];
  } else if (row > 6) {
    rowBoundary = [6, 8];
  }
  if (col >= 3 && col <= 6) {
    colBoundary = [3, 5];
  } else if (col > 6) {
    colBoundary = [6, 8];
  }
  return [rowBoundary, colBoundary];
};

//check if tile is in same grid as selected tile
const isGridMember = (iRow, iCol, selectedTile) => {
  const gridBoundary = getGridBoundary(selectedTile);
  const rowBoundary = gridBoundary[0];
  const colBoundary = gridBoundary[1];
  if (
    iRow >= rowBoundary[0] &&
    iRow <= rowBoundary[1] &&
    iCol >= colBoundary[0] &&
    iCol <= colBoundary[1]
  ) {
    return true;
  }
  return false;
};

//TODO consider moving selected row, col and grid into state so calculation not done excessively
const tileStyle = (iRow, iCol, selectedTile) => {
  let tileClass = "tile";
  if (!selectedTile) return tileClass;
  if (selectedTile[0] === iRow && selectedTile[1] === iCol) {
    tileClass += " selected";
  } else if (selectedTile[0] === iRow || selectedTile[1] === iCol) {
    tileClass += " group";
  } else if (isGridMember(iRow, iCol, selectedTile)) {
    tileClass += " group";
  }
  return tileClass;
};

export default function Tile({
  value,
  iRow,
  iCol,
  selectedTile,
  handleClickedTile,
}) {
  const tileClass = tileStyle(iRow, iCol, selectedTile);
  value = value === 0 ? "" : value;
  return (
    <td
      className={tileClass}
      onClick={() => {
        handleClickedTile([iRow, iCol]);
      }}
    >
      {value}
    </td>
  );
}
