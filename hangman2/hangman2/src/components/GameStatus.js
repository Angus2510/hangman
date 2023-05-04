import React from "react";
import Button from "react-bootstrap/Button";
// this function will reset the game when the button is
const GameStatus = ({ gameStat, resetButton }) => {
  return (
    <div>
      <div>{gameStat}</div>
      
    </div>
  );
};

export default GameStatus;
