import React, { Component } from 'react';

class RNForm extends Component {

	constructor(props){
		super(props)
	}

	render() {
		switch(this.props.method){
			case "0":
			return (
				<h1> 0 </h1>
			)

			case "1":
			return (
				<h1> 1 </h1>
			)

			case "2":
			return (
				<h1> 2 </h1>
			)

			case "3":
			return (
				<h1> 3 </h1>
			)

			case "4":
			return (
				<h1> 4 </h1>
			)
			default:
			return (
				<></>
			)

		}
	}

}

export default RNForm