import React, { Component } from "react";

export default class Hobbies extends Component {
  render() {
    const { name = "Nothing", hobbies = ["Nothing"], bangs = 4 } = this.props;
    const exla = "!".repeat(bangs);
    return (
      <div>
        <h1>
          {name}
          {exla}
        </h1>
        <ul>
          {hobbies.map((hobby) => (
            <li>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  }
}
