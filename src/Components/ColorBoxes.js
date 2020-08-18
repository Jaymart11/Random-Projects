import React, { Component } from "react";
import ColorBox from "./ColorBox";
import { randomIndex, randomColorGenerator } from "./helper";

export default class ColorBoxes extends Component {
  static defaultProps = {
    allColors: ["red", "blue", "yellow", "pink", "magenta"],
  };
  constructor(props) {
    super(props);

    this.state = {
      defaultColors: randomColorGenerator(
        this.props.boxCount,
        this.props.allColors
      ),
      counter: 1,
    };
  }
  //   default = () => {
  //     this.setState((state) => ({
  //       defaultColors: state.defaultColors.map((n) =>
  //         randomIndex(this.props.allColors)
  //       ),
  //     }));
  //   };
  pickColor = () => {
    let col;
    let col1;
    let col2;
    let col3;
    let col4;
    do {
      col = randomIndex(this.props.allColors);
      col1 = randomIndex(this.props.allColors);
      col2 = randomIndex(this.props.allColors);
      col3 = randomIndex(this.props.allColors);
      col4 = randomIndex(this.props.allColors);
    } while (
      this.state.defaultColors[0] === col &&
      this.state.defaultColors[1] === col1 &&
      this.state.defaultColors[2] === col2 &&
      this.state.defaultColors[3] === col3
    );
    this.setState({ defaultColors: [col, col1, col2, col3, col4] });
    this.setState((state) => ({ counter: state.counter + 1 }));
  };

  render() {
    console.log(...this.props.allColors);
    return (
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <h1>Click counter: {this.state.counter}</h1>
        <button onClick={this.pickColor}> OT</button>
        {this.state.defaultColors.map((colors) => (
          <div>
            <ColorBox color={colors} />
          </div>
        ))}
      </div>
    );
  }
}
