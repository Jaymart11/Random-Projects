import React, { Component } from "react";
import "../css/Dice.css";

export default class Dice extends Component {
  render() {
    return (
      <div>
        <h1>
          <i
            className={`fas fa-dice-${this.props.die} ${
              this.props.animation ? "shaking" : null
            }`}></i>
        </h1>
      </div>
    );
  }
}
