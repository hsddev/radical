import React, { Component } from "react";
import "./Scenario.css";

class Scenario extends React.Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
    };
  }

  handleChange() {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    let clickedDiv = !this.state.clicked ? "scenario" : "scenario-clicked";

    return (
      <div className={clickedDiv} onClick={this.handleChange.bind(this)}>
        <img src={this.props.src} />
        <p>{this.props.text}</p>
      </div>
    );
  }
}
export default Scenario;
