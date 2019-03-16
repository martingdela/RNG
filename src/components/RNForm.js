import React, { Component } from 'react';

class RNForm extends Component {

	constructor(props) {
		super(props)
		this.state = {
			seed: 0,
			number: 0,
			a: 0,
			c: 0,
			m: 0
		}

		this.handleInputChange = this.handleInputChange.bind(this)
	}

	handleInputChange = (event) => {
		switch (event.target.id) {
			case "seed":
				this.setState({ seed: event.target.value })
				break
			case "count":
				this.setState({ number: event.target.value })
				break
			case "a":
				this.setState({ a: event.target.value })
				break
			case "c":
				this.setState({ c: event.target.valuec })
				break
			case "m":
				this.setState({ m: event.target.value })
				break
			default:
				alert('DEBUG: SOMETHING HAPPENED')
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
							<div className="row" style={{ padding: "1%" }}>
								<label>Semilla</label>
								<input type="number" id="seed" placeholder="1234" name="seed" value={this.state.seed} onChange={this.handleInputChange} />
							</div>
							<div className="row" style={{ padding: "1%" }}>
								<label>Numeros a generar</label>
								<input type="number" id="count" placeholder="9" name="count" value={this.state.number} onChange={this.handleInputChange} />
							</div>
							<div className="row" style={{ padding: "1%" }}>
								<button type="submit">Generar</button>
							</div>
						</div>
					</>
				)

			case "1": case "2":
				return (
					<>
					<br/>
					<h5>Llena la siguiente forma</h5>
					<div class="container">
						<div class="row" style={{padding: "1%"}}>
							<label>Semilla</label>
							<input type="number" id="seed" value={this.state.seed} onChange={this.handleInputChange} placeholder="1234" name="seed" />
						</div>
						<div class="row" style={{padding: "1%"}}>
							<label>Valor de 'a'</label>
							<input type="number" id="a" value={this.state.a} onChange={this.handleInputChange} placeholder="1234" name="a" />
						</div>
						<div class="row" style={{padding: "1%"}}>
							<label>Valor de 'c'</label>
							<input type="number" id="c" value={this.state.c} onChange={this.handleInputChange} placeholder="1234" name="c" />
						</div>
						<div class="row" style={{padding: "1%"}}>
							<label>Valor de 'm'</label>
							<input type="number" id="m" value={this.state.m} onChange={this.handleInputChange} placeholder="1234" name="m" />
						</div>
						<div class="row" style={{padding: "1%"}}>
							<label>Numeros a generar</label>
							<input type="number" id="count" value={this.state.count} onChange={this.handleInputChange} placeholder="9" name="count" />
						</div>
						<div class="row" style={{padding: "1%"}}>
							<button type="submit">Generar</button>
						</div>
					</div>
					</>
				)

			case "3":
				return (
					<>
					<br/>
					<h5>Llena la siguiente forma</h5>
					<div class="container">
						<div class="row" style={{padding: "1%"}}>
							<label>Semilla</label>
							<input type="number" id="seed" value={this.state.seed} onChange={this.handleInputChange} placeholder="1234" name="seed" />
						</div>
						<div class="row" style={{padding: "1%"}}>
							<label>Valor de 'a'</label>
							<input type="number" id="a" value={this.state.a} onChange={this.handleInputChange} placeholder="1234" name="a" />
						</div>
						<div class="row" style={{padding: "1%"}}>
							<label>Valor de 'm'</label>
							<input type="number" id="m" value={this.state.m} onChange={this.handleInputChange} placeholder="1234" name="m" />
						</div>
						<div class="row" style={{padding: "1%"}}>
							<label>Numeros a generar</label>
							<input type="number" id="count" value={this.state.count} onChange={this.handleInputChange} placeholder="9" name="count" />
						</div>
						<div class="row" style={{padding: "1%"}}>
							<button type="submit">Generar</button>
						</div>
					</div>
					</>
				)
			case "4":
				return (
					<>
					<h1>TBP</h1>
					</>
				)
			default:
				return (
					<></>
				)

		}
	}

}

export default RNForm