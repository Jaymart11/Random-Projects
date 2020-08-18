import React, { Component } from "react";
import Dice from "./Dice";
import "../css/Rolldie.css";

export default class RollDie extends Component {
  static defaultProps = {
    num: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = {
      animation: false,
      dice: [
        { id: 1, die: "six" },
        { id: 2, die: "six" },
      ],
    };
  }

  randomDie = () => {
    const randDie = Math.floor(Math.random() * this.props.num.length);
    const randDie1 = Math.floor(Math.random() * this.props.num.length);
    setTimeout(() => {
      this.setState({
        dice: [
          { die: this.props.num[randDie] },
          { die: this.props.num[randDie1] },
        ],
      });
    }, 1500);
  };

  shaking = () => {
    this.setState({ animation: true });
    setTimeout(() => {
      this.setState({ animation: false });
    }, 1500);
  };

  addDice = () => {};
  render() {
    return (
      <div className="RollDie">
        <div className="Dice">
          {this.state.dice.map((dice) => (
            <Dice
              key={dice.id}
              die={dice.die}
              animation={this.state.animation}
            />
          ))}
        </div>
        <button
          disabled={this.state.animation}
          onClick={() => {
            this.randomDie();
            this.shaking();
          }}
          className={this.state.animation ? "rolling" : null}>
          {!this.state.animation ? "Roll Dice" : "Rolling ..."}
        </button>
      </div>
    );
  }
}
