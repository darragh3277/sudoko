import React from "react";
import "./Style.css";

const options = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const Board = ({ handleMiniBoardClick }) =>
  options.map((rows, i) => {
    return (
      <tr key={i}>
        {rows.map((val, i) => {
          return (
            <td key={i} onClick={handleMiniBoardClick}>
              {val}
            </td>
          );
        })}
      </tr>
    );
  });

export default function MiniBoard({ handleMiniBoardClick }) {
  return (
    <table className="mini-board">
      <tbody>
        <Board handleMiniBoardClick={handleMiniBoardClick} />
      </tbody>
    </table>
  );
}
