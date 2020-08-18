import React, { Component } from "react";
import Child from "./Child";

export default class EventChild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nums: [1, 2, 2, 3, 3, 4, 5],
    };
  }
  remove = (e) => {
    this.setState((state) => ({
      nums: state.nums.filter((n) => n !== e),
    }));
  };

  render() {
    const num = this.state.nums.map((n, i) => (
      <Child key={i} lis={n} func={this.remove} />
    ));
    return (
      <div>
        <ul>{num}</ul>
      </div>
    );
  }
}
