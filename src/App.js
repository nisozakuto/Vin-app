import React, { Component } from "react";
import "./App.css"
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      vinNumber: "",
      vinData: "",
      nextInfo: "",
      anti_brake_system: "",
      city_mileage: "",
      engine: "",
      highway_mileage: "",
      made_in: "",
      make: "",
      model: "",
      optional_seating: "",
      overall_height: "",
      overall_length: "",
      overall_width: "",
      standard_seating: "",
      steering_type: "",
      style: "",
      tank_size: "",
      trim_level: "",
      vin: "",
      year: "",
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
    //https://rapidapi.com/vinfreecheck/api/vin-decoder-1/endpoints
    {this.state.vinNumber.length == 17 ? 
this.fetchAndDecode()
    :
    (console.log("not 17 chars"))
  }
}

fetchAndDecode(){
  fetch(
    `https://vindecoder.p.rapidapi.com/decode_vin?vin=${this.state.vinNumber}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "vindecoder.p.rapidapi.com",
        "x-rapidapi-key":
        process.env.REACT_APP_VINDECODE_API_KEY,
      },
    }
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      this.setState({
        vinNumber: res.vinNumber,
        anti_brake_system: res.specification.anti_brake_system,
        city_mileage: res.specification.city_mileage,
        engine: res.specification.engine,
        highway_mileage: res.specification.highway_mileage,
        made_in: res.specification.made_in,
        make: res.specification.make,
        model: res.specification.model,
        optional_seating: res.specification.optional_seating,
        overall_height: res.specification.overall_height,
        overall_length: res.specification.overall_length,
        overall_width: res.specification.overall_width,
        standard_seating: res.specification.standard_seating,
        steering_type: res.specification.steering_type,
        style: res.specification.style,
        tank_size: res.specification.tank_size,
        trim_level: res.specification.trim_level,
        vin: res.specification.vin,
        year: res.specification.year,
      });
    });

}

  componentDidMount() {
    console.log("Mounted");
  }

  render() {
    return (
      <section className="decoder-app">
        <h1>VIN Decoder</h1>
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
        <section>
          <div className="vinInfo"><h2>VIN number: {this.state.vinNumber ? this.state.year : "placeholder"}</h2></div>
          <div className="vinInfo"><h4>Anti_brake_system:</h4><p>{this.state.anti_brake_system ? this.state.anti_brake_system : "placeholder"}</p></div>
          <div className="vinInfo"><h4>City_mileage:</h4><p>{this.state.city_mileage ? this.state.city_mileage : "placeholder"}</p></div>
          <div className="vinInfo"><h4>Engine:</h4><p>{this.state.engine ? this.state.engine : "placeholder"}</p></div>
          <div className="vinInfo"><h4>Highway_mileage:</h4><p>{this.state.highway_mileage ? this.state.highway_mileage : "placeholder"}</p></div>
          <div className="vinInfo"><h4>Made_in:</h4><p>{this.state.made_in ? this.state.made_in : "placeholder"}</p></div>
          <div className="vinInfo"><h4>Make:</h4><p>{this.state.make ? this.state.make : "placeholder"}</p></div>
          <div className="vinInfo"><h4>Model:</h4><p>{this.state.model ? this.state.model : "placeholder"}</p></div>
          <div className="vinInfo"><h4>Optional_seating:</h4><p>{this.state.optional_seating ? this.state.optional_seating : "placeholder"}</p></div>
          <div className="vinInfo"><h4>Overall_height:</h4><p>{this.state.overall_height ? this.state.overall_height : "placeholder"}</p></div>
          <div className="vinInfo"><h4>Overall_length:</h4><p>{this.state.overall_length ? this.state.overall_length : "placeholder"}</p></div>
          <div className="vinInfo"><h4>Overall_width:</h4><p>{this.state.overall_width ? this.state.overall_width : "placeholder"}</p></div>
          <div className="vinInfo"><h4>Standard_seating:</h4><p>{this.state.standard_seating ? this.state.standard_seating : "placeholder"}</p></div>
          <div className="vinInfo"><h4>Steering_type:</h4><p>{this.state.steering_type ? this.state.steering_type : "placeholder"}</p></div>
          <div className="vinInfo"><h4>Style:</h4><p>{this.state.style ? this.state.style : "placeholder"}</p></div>
          <div className="vinInfo"><h4>Tank_size:</h4><p>{this.state.tank_size ? this.state.tank_size : "placeholder"}</p></div>
          <div className="vinInfo"><h4>Trim_level:</h4><p>{this.state.trim_level ? this.state.trim_level : "placeholder"}</p></div>
          <div className="vinInfo"><h4>Vin:</h4><p>{this.state.vin ? this.state.vin : "placeholder"}</p></div>
          <div className="vinInfo"><h4>Year:</h4><p>{this.state.year ? this.state.year : "placeholder"}</p></div>
        </section>
      
      </section>
    );
  }
}
