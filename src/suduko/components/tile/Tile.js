import React from "react";
import "./Style.css";

export default function Tile({
  value,
  iRow,
  iCol,
  selectedTile,
  handleSelectedTile,
}) {
  const tileClass =
    selectedTile[0] === iRow && selectedTile[1] === iCol
      ? "tile selected"
      : "tile";
  return (
    <td
      className={tileClass}
      onClick={() => {
        handleSelectedTile([iRow, iCol]);
      }}
    >
      {value}
    </td>
  );
}
