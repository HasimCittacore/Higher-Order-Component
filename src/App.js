import React from "react";
import "./style.css";
import HigherOC from './hoc';
export default function App(props) {
  return (
    <div>
      <h4>This is {props.componentName} having {props.value} points and the Team which won was {props.winning_Team}</h4>
    </div>
  );
}
export default HigherOC(App)
