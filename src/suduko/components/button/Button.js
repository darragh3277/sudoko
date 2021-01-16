import React from "react";
import "./Style.css";

export default function Button(props) {
  const type = props.type === undefined ? "btn-primary" : props.type;
  const size = props.size === undefined ? "" : "btn-" + props.size;
  return (
    <button className={"btn " + type + " " + size}>{props.children}</button>
  );
}
