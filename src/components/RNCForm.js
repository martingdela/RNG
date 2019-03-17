import React, { Component } from 'react';
import CHIPrinter from './CHIPrinter'
import KOLPrinter from './KOLPrinter'

class RNCForm extends Component {

	constructor(props) {
		super(props)
		this.state = {
			alpha: 0.20
		}

		this.handleInputChange = this.handleInputChange.bind(this)
	}

	handleInputChange = (event) => {
		switch (event.target.id) {
			case "alpha":
				this.setState({ alpha: event.target.value })
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
						<br />
						<h5>Llena la siguiente forma</h5>
						<div class="container">
							<div class="row" style={{ padding: "1%" }}>
								<label>Alpha</label>
								<div className="row">
									<div className="twelve columns">
										<select className="u-full-width" id="alpha" value={this.state.alpha} onChange={this.handleInputChange}>
											<option disabled selected> Selecciona una opcion </option>
											<option value="0.20">0.20</option>
											<option value="0.10">0.10</option>
											<option value="0.05">0.0.05</option>
											<option value="0.02">0.0.02</option>
											<option value="0.01">0.01</option>
											<option value="0.005">0.005</option>
											<option value="0.002">0.002</option>
											<option value="0.005">0.001</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						<KOLPrinter numbers={this.props.numbers} alpha={this.state.alpha} />
					</>
				)

			case "1":
				return (
					<>
						<br />
						<h5>Llena la siguiente forma</h5>
						<div class="container">
							<div class="row" style={{ padding: "1%" }}>
								<label>Alpha</label>
								<div className="row">
									<div className="twelve columns">
										<select className="u-full-width" id="alpha" value={this.state.alpha} onChange={this.handleInputChange}>
											<option disabled selected> Selecciona una opcion </option>
											<option value="0.20">0.20</option>
											<option value="0.10">0.10</option>
											<option value="0.05">0.05</option>
											<option value="0.02">0.02</option>
											<option value="0.01">0.01</option>
											<option value="0.005">0.005</option>
											<option value="0.002">0.002</option>
											<option value="0.005">0.001</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						<CHIPrinter numbers={this.props.numbers} alpha={this.state.alpha} />
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