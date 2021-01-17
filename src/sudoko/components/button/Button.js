import React from "react";
import "./Style.css";

export default function Button({ type, size, children, handleClick }) {
  const buttonType = type === undefined ? "btn-primary" : type;
  const buttonSize = size === undefined ? "" : "btn-" + size;
  return (
    <button
      className={"btn " + buttonType + " " + buttonSize}
      onClick={() => handleClick()}
    >
      {children}
    </button>
  );
}
