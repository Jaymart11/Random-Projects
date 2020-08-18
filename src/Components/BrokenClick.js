import React, { Component } from "react";

export default class BrokenClick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: false,
    };
  }
  statusChanger = () => {
    !this.state.status
      ? this.setState({ status: true })
      : this.setState({ status: false });
  };
  render() {
    return (
      <div>
        <button onClick={this.statusChanger}> button</button>
        <h1>{this.state.status ? "Clicked!!" : "Not Clicked"}</h1>
        <h1>
          <i class="fas fa-dice-two"></i>
        </h1>
      </div>
    );
  }
}
