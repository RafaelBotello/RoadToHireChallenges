import React from "react";

const Progress = ({ attempts, guessList }) => {
  return (
    <div>
      <h2>Guess #{attempts}</h2>
      <ul>{guessList}</ul>
    </div>
  );
};

export default Progress;
