import React, { Component } from "react";
import AddBox from "./AddBox";
import { v4 as uuidv4 } from "uuid";

export default class BoxMaker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boxes: [{ height: 10, width: 10, backgroundColor: "red", id: uuidv4() }],
    };
  }
  handleAddBox = (item) => {
    const uniqueKey = { ...item, id: uuidv4() };
    this.setState((state) => ({
      boxes: [...state.boxes, uniqueKey],
    }));
  };

  removeBox = (i) => {
    this.setState((state) => {
      const boxes = state.boxes.filter((item, j) => i !== j);

      return {
        boxes,
      };
    });
  };

  render() {
    return (
      <div>
        <AddBox add={this.handleAddBox} />
        <div style={{ display: "flex" }}>
          {this.state.boxes.map((box, index) => (
            <div key={box.id}>
              <div
                style={{
                  height: `${box.height}rem`,
                  width: `${box.width}rem`,
                  backgroundColor: box.backgroundColor,
                }}></div>
              <button onClick={() => this.removeBox(index)}>remove item</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
