import React, { Component } from "react";
import LottoBalls from "./LottoBalls";
import "../css/LottoEvent.css";

export default class LottoEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ballNumbers: Array.from({ length: this.props.ballCounts }),
    };
  }

  randNum = () => {
    return Math.floor(Math.random() * this.props.maxNum + 1);
  };

  ballCount = () => {
    this.setState((state) => ({
      ballNumbers: state.ballNumbers.map((n) => this.randNum()),
    }));
  };
  render() {
    return (
      <div className="LottoEvent">
        <h1 onClick={() => this.ballCount()}>{this.props.title}</h1>
        <section>
          {this.state.ballNumbers.map((ball) => (
            <LottoBalls ball={ball} />
          ))}
        </section>
        <button onClick={() => this.ballCount()}>
          {" "}
          Generate Lotto Numbers
        </button>
      </div>
    );
  }
}
