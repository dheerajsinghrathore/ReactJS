// Class level

import React, { Component } from "react";

export default class Student1 extends Component {
  state = { name: "Amit", roll: 101 };

  render() {
    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>Roll number: {this.state.roll}</p>
      </div>
    );
  }
}
