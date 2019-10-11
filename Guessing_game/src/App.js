import React from "react";
import Form from "./Components/Form/";
import { generateRandomExpert, generateRandomEasy } from "./util/";
import Progress from "./Components/Progress";
import "./index.css";

class App extends React.Component {
  state = {
    generatedNumber: undefined,
    guess: undefined,
    allGuesses: [],
    attempts: 0,
    absDiff: 0,
    highscore: 20,
    difference: "Please select a game mode"
  };

  expertMode = () => {
    this.setState({ generatedNumber: generateRandomExpert });
  };

  easyMode = () => {
    this.setState({ generatedNumber: generateRandomEasy });
  };

  resetGame = () => {
    this.setState({
      guess: undefined,
      allGuesses: [],
      attempts: 0,
      absDiff: 0,
      difference: "Please select a game mode"
    });
  };

  updateAppState = guess => {
    console.log(`This is the answer ${this.state.generatedNumber}`);
    const absDiff = Math.abs(guess - this.state.generatedNumber);

    this.setState(prevState => ({
      guess,
      allGuesses: [...prevState.allGuesses, { guess }],
      attempts: prevState.attempts + 1,
      absDiff: absDiff
    }));

    if (guess == this.state.generatedNumber) {
      let high = this.state.attempts;
      console.log("Congratulations" + high);
      this.setState({ difference: "Congratulations you won!" });
      this.NewHighScore(high);
    } else {
      console.log("Keep trying");
    }

    // this.differenceCheck();

    if (this.state.guess > this.state.generatedNumber) {
      this.setState({ difference: "Your number is too high." });
    } else if (this.state.guess < this.state.generatedNumber) {
      this.setState({ difference: "Your number is too low." });
    } else {
    }
  };

  // differenceCheck = () => {
  //   if (this.state.guess > this.state.generatedNumber) {
  //     this.setState({ difference: "Your number is too high." });
  //   } else if (this.state.guess < this.state.generatedNumber) {
  //     this.setState({ difference: "Your number is too low." });
  //   } else {
  //     this.setState({ difference: "Congratulations you won!" });
  //   }
  // };

  NewHighScore = high => {
    if (high < this.state.highscore) {
      const newHighscore = this.state.attempts;
      this.setState({ highscore: newHighscore });
    } else {
      console.log("Keep trying man");
    }
  };

  render() {
    const { allGuesses, attempts, absDiff, highscore } = this.state;
    const guesslist = allGuesses.map((item, index) => {
      return (
        <li key={index}>
          <span>{item.guess}</span>
        </li>
      );
    });
    return (
      <div className="App">
        <h1 className="text-center">Guessing game</h1>
        <p className="text-center">Guess the number generated </p>
        <div className="row">
          <button className="btn btn-primary col-md-4" onClick={this.resetGame}>
            Reset
          </button>
          <button className="btn btn-success col-md-4" onClick={this.easyMode}>
            Easy 0 - 10
          </button>
          <button className="btn btn-danger col-md-4" onClick={this.expertMode}>
            Expert 0 - 100
          </button>
        </div>
        <Form
          returnGuess={guess => {
            this.updateAppState(guess);
          }}
        />
        <Progress attempts={attempts} guessList={guesslist} />
        <h3 className="text-center">{this.state.difference}</h3>
        <div className="row bg-dark cont-highscore-title">
          <div className="col-md-12 text-light text-center">
            <h3>Highscores</h3>
          </div>
        </div>
        <div className="container-fluid bg-dark cont-highscore">
          <div className="row">
            <div className="col-md-6 col-sm-6 bg-success attempts">
              <p>Easy:</p>
            </div>
            <div className="col-md-6 col-sm-6 bg-success highscores">
              <p>{highscore}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 bg-danger attempts">
              <p>Expert:</p>
            </div>
            <div className="col-md-6 col-sm-6 bg-danger highscores">
              <p>{highscore}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
