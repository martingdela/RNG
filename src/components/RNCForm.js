import React, { Component } from 'react';
import CHIPrinter from './CHIPrinter'
import KOLPrinter from './KOLPrinter'

class RNCForm extends Component {

	constructor(props) {
		super(props)
		this.state = {
			alpha: 0
		}

		this.handleInputChange = this.handleInputChange.bind(this)
	}

	handleInputChange = (event) => {
		switch(event.target.id){
			case "alpha":
				this.setState({alpha: event.target.value})
				break
			default:
				break
		}
	}

	render() {
		switch (this.props.method) {
			case "0":
				return (
					<>
					<br/>
					<h5>Llena la siguiente forma</h5>
					<div class="container">
						<div class="row" style={{padding: "1%"}}>
							<label>Alpha</label>
							<input type="number" id="alpha" value={this.state.alpha} onChange={this.handleInputChange} placeholder="1234" name="alpha" />
						</div>
					</div>
					<KOLPrinter numbers={this.props.numbers} alpha={this.state.alpha}/>
					</>
				)

			case "1":
				return (
					<>
					<br/>
					<h5>Llena la siguiente forma</h5>
					<div class="container">
						<div class="row" style={{padding: "1%"}}>
							<label>Alpha</label>
							<input type="number" id="alpha" value={this.state.alpha} onChange={this.handleInputChange} placeholder="1234" name="alpha" />
						</div>
					</div>
					<CHIPrinter numbers={this.props.numbers} alpha={this.state.alpha}/>
					</>
				)

			default:
				return (
					<></>
				)

		}
	}

}

export default RNCForm