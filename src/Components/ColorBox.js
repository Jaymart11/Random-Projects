import React, { Component } from "react";

export default class ColorBox extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: this.props.color,
          width: "150px",
          height: "150px",
          margin: "1rem",
        }}></div>
    );
  }
}
