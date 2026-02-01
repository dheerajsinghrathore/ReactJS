import React, { Component } from "react";

export default class Student3 extends Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name, roll: this.props.roll };
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
