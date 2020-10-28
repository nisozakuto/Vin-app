import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      vinNumber: "",
      vinData: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ vinNumber: event.target.value });
  }

  handleSubmit(event) {
    console.log("submitted");
    this.vindDcode();
    event.preventDefault();
  }

  vindDcode() {
    fetch(
      "https://vindecoder.p.rapidapi.com/decode_vin?vin=4F2YU09161KM33122",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "vindecoder.p.rapidapi.com",
          "x-rapidapi-key":
            "ef828baedbmshec5a9db5f027d34p138e67jsn979a08fe957d",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        // this.setState({
        //   vinData: res.results,
        // });
        console.log(res);
      });
  }

  componentDidMount() {
    console.log("Mounted");
  }

  render() {
    return (
      <section>
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
      </section>
    );
  }
}
