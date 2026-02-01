import React, { Component } from "react";

export default class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = { currDateTime: new Date() };
		setInterval(this.updateTime, 1000);
	}
	updateTime = () => {
		this.setState({ currDateTime: new Date() });
	};
	render() {
		return (
			<div>
				<h2>Hello Everyone</h2>
				<p>Current date and time: {this.state.currDateTime.toLocaleString()}</p>
			</div>
		);
	}
}
