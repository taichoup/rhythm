import React from "react";

export function Circle(props) {
  return (
    <div id="wrapper">
      <div id="path"></div>
      {/* If I want to re-use this component I need to make it possible for the toggle function to select all of them (so the ID here is not a good idea) */}
      <div id="circle" className={props.state ? "circle-rotate" : ""}></div>
    </div>
  );
}
