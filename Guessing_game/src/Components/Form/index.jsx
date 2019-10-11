import React from "react";
import "./style.css";

const Form = ({ returnGuess }) => {
  const onSubmit = event => {
    event.preventDefault();
    let guess = event.target.elements.guess.value;
    console.log(`This is the users guess: ${guess}`);
    returnGuess(guess);
  };
  return (
    <form className="guess-form" onSubmit={onSubmit}>
      <div className="form-group row">
        <label className="form-label col-md-4">Enter a guess:</label>
        <input
          className="form-control-md col-md-4"
          type="number"
          name="guess"
          id="guess"
          required
        />
        <button className="col-md-2 btn-form" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
