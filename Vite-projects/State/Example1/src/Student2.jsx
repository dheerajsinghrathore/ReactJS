// Using class constructor

import React, { Component } from "react";

export default class Student1 extends Component {
  constructor() {
    super();
    this.state = { name: "Rahul", roll: 102 };
  }

  render() {
    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>Roll number: {this.state.roll}</p>
      </div>
    );
  }
}
