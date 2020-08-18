import React, { Component } from "react";
import "../css/LottoBalls.css";

export default class LottoBalls extends Component {
  render() {
    return (
      <div className="LottoBalls">
        <h1>{this.props.ball}</h1>
      </div>
    );
  }
}
