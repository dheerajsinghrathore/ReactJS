import React, { Component } from "react";

export default class ColorChanger extends Component {
	constructor(props) {
		super(props);
		this.state = { backgroundColor: "red" };
		setInterval(this.changeColor, 2000);
	}
	changeColor = () => {
		let currColor = this.state.backgroundColor;
		if (currColor === "red") {
			currColor = "green";
		} else if (currColor === "green") {
			currColor = "blue";
		} else {
			currColor = "red";
		}
		this.setState({ backgroundColor: currColor });
	};
	render() {
		let myStyle = {
			height: "100vh",
			width: "100vw",
			backgroundColor: this.state.backgroundColor,
		};

		return <div style={myStyle}></div>;
	}
}
