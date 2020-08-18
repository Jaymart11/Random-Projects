import React, { Component } from "./node_modules/react";
import "../css/tesing.css";
export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 2,
      gameOver: false,
    };
  }
  addOne = () => {
    const randNum = Math.floor(Math.random() * 30 + 1);
    this.setState({ score: randNum });
  };
  render() {
    return (
      <div className="Game">
        <button onClick={this.addOne}> button</button>
        <h1>{this.state.score}</h1>
      </div>
    );
  }
}
