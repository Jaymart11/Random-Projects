import React, { Component } from "react";

class Hello extends Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const isWinner = s1 === s2 && s2 === s3;
    return (
      <div>
        <h1>
          {s1} {s2} {s3}
        </h1>
        <p>{isWinner ? "You Win" : "You Lose"}</p>
      </div>
    );
  }
}

export default Hello;
