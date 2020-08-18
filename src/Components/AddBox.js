import React, { Component } from "react";

export default class AddBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: "",
      width: "",
      backgroundColor: "",
    };
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.add(this.state);
    this.setState({ height: "", width: "", backgroundColor: "" });
  };
  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}>
          <div>
            <label htmlFor="height">Height :</label>
            <input
              id="height"
              name="height"
              value={this.state.height}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="width">Width :</label>
            <input
              id="width"
              name="width"
              value={this.state.width}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="backgroundColor">Background Color :</label>
            <input
              id="backgroundColor"
              name="backgroundColor"
              value={this.state.backgroundColor}
              onChange={this.handleChange}
            />
          </div>
          <button style={{ width: "20rem", margin: "0 auto" }}>add Box</button>
        </form>
      </div>
    );
  }
}
