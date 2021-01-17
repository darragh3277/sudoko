import React from "react";
import "./Style.css";

const getSelectedGridBox = (selectedTile) => {
  let selectedGrid = [0, 0];
  if (selectedTile[0] >= 3 && selectedTile[0] <= 6) {
    selectedGrid[1] = 1;
  } else if (selectedTile[0] > 6) {
    selectedGrid[1] = 2;
  }
  if (selectedTile[1] >= 3 && selectedTile[1] <= 6) {
    selectedGrid[0] = 1;
  } else if (selectedTile[1] > 6) {
    selectedGrid[0] = 2;
  }
  return selectedGrid;
};

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

const tileStyle = (iRow, iCol, selectedTile) => {
  let tileClass = "tile";
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
  getGridBoundary(selectedTile);
  const tileClass = tileStyle(iRow, iCol, selectedTile);
  getSelectedGridBox(selectedTile);
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
