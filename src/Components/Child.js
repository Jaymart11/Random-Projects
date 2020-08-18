import React, { Component } from "react";

export default class Child extends Component {
  handleRemove = () => {
    this.props.func(this.props.lis);
  };
  render() {
    return (
      <div>
        <li>
          {this.props.lis} <button onClick={this.handleRemove}>X</button>
        </li>
      </div>
    );
  }
}
