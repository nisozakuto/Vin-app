import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      vinNumber: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ vinNumber: event.target.value });
  }

  handleSubmit(event) {
    alert("submitted");
    event.preventDefault();
  }

  componentDidMount() {
    console.log("Mounted");
  }
  hand;
  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label>Enter VIN number:</label>
          <input
            type="text"
            placeholder={"1HGBH41JXMN109186"}
            value={this.state.vinNumber}
            onChange={this.handleChange}
          />
          <input type="submit" value="Send" />
        </form>
      </section>
    );
  }
}
