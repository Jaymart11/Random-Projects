import React, { Component } from "react";

export default class CoinFlipper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flip: 0,
      head: 0,
      tail: 0,
      isFlipped: null,
    };
  }
  coinFlips = () => {
    const random = Math.floor(Math.random() * 2);
    this.setState((state) => ({
      isFlipped: random,
      flip: state.flip + 1,
      head: state.head + (random === 1 ? 1 : 0),
      tail: state.tail + (random === 0 ? 1 : 0),
    }));
  };
  render() {
    return (
      <div>
        <h1>{this.state.isFlipped === 1 ? "Head" : "Tail"}</h1>
        <button
          onClick={() => {
            this.coinFlips();
          }}>
          Flip Coin
        </button>
        <p>
          Flip Count: {this.state.flip} Head count : {this.state.head} Tail
          count : {this.state.tail}
        </p>
      </div>
    );
  }
}
