import React, { Component } from 'react';
import RNPrinter from './RNPrinter'

class RNForm extends Component {

	constructor(props) {
		super(props)
		this.state = {
			seed: 0,
			number: 0,
			a: 0,
			c: 0,
			m: 0,
			mtype: 0
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this)
	}

	handleInputChange = (event) => {
		switch (event.target.id) {
			case "seed":
				this.setState({ seed: event.target.value})
				break
			case "count":
				this.setState({ number: event.target.value})
				break
			case "a":
				this.setState({ a: event.target.value})
				break
			case "c":
				this.setState({ c: event.target.value})
				break
			case "m":
				this.setState({ m: event.target.value})
				break
			case "mtype":
				this.setState({ mtype: event.target.value})
					break
			default:
				alert('DEBUG: SOMETHING HAPPENED')
		}
	}

	handleSubmit = event => {
		event.preventDefault();
		const data = new FormData(event.target);
		console.log(data)
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

						</div>

						<RNPrinter method={this.props.method} seed={this.state.seed} count={this.state.number} a={this.state.a} c={this.state.c} m={this.state.m} />
					</>
				)

			case "1": case "2":
				return (
					<>
						<br />
						<h5>Llena la siguiente forma</h5>
						<div class="container">
							<div class="row" style={{ padding: "1%" }}>
								<label>Semilla</label>
								<input type="number" id="seed" value={this.state.seed} onChange={this.handleInputChange} placeholder="1234" name="seed" />
							</div>
							<div class="row" style={{ padding: "1%" }}>
								<label>Valor de 'a'</label>
								<input type="number" id="a" value={this.state.a} onChange={this.handleInputChange} placeholder="1234" name="a" />
							</div>
							<div class="row" style={{ padding: "1%" }}>
								<label>Valor de 'c'</label>
								<input type="number" id="c" value={this.state.c} onChange={this.handleInputChange} placeholder="1234" name="c" />
							</div>
							<div class="row" style={{ padding: "1%" }}>
								<label>Valor de 'm'</label>
								<input type="number" id="m" value={this.state.m} onChange={this.handleInputChange} placeholder="1234" name="m" />
							</div>
							<div class="row" style={{ padding: "1%" }}>
								<label>Numeros a generar</label>
								<input type="number" id="count" value={this.state.count} onChange={this.handleInputChange} placeholder="9" name="count" />
							</div>
						</div>
						<RNPrinter method={this.props.method} seed={this.state.seed} count={this.state.number} a={this.state.a} c={this.state.c} m={this.state.m} />
					</>
				)

			case "3":
				return (
					<>
						<br />
						<h5>Llena la siguiente forma</h5>
						<div class="container">
							<div class="row" style={{ padding: "1%" }}>
								<label>Semilla</label>
								<input type="number" id="seed" value={this.state.seed} onChange={this.handleInputChange} placeholder="1234" name="seed" />
							</div>
							<div class="row" style={{ padding: "1%" }}>
								<label>Valor de 'a'</label>
								<input type="number" id="a" value={this.state.a} onChange={this.handleInputChange} placeholder="1234" name="a" />
							</div>
							<div class="row" style={{ padding: "1%" }}>
								<label>Valor de 'm'</label>
								<input type="number" id="m" value={this.state.m} onChange={this.handleInputChange} placeholder="1234" name="m" />
							</div>
							<div class="row" style={{ padding: "1%" }}>
								<label>Numeros a generar</label>
								<input type="number" id="count" value={this.state.count} onChange={this.handleInputChange} placeholder="9" name="count" />
							</div>
						</div>
						<RNPrinter method={this.props.method} seed={this.state.seed} count={this.state.number} a={this.state.a} c={this.state.c} m={this.state.m} />
					</>
				)
			case "4":
				return (
					<>

						<div className="container" style={{ marginTop: "3%" }}>
							<div className="row">
								<form onSubmit={this.handleSubmit}>
									<div className="container">
										<div className="row">
											<div className="twelve columns">
												<select className="u-full-width" id="mtype" value={this.state.mtype} onChange={this.handleInputChange}>
													<option disabled selected> Selecciona una opcion </option>
													<option value="0">L'ecuyer</option>
													<option value="1">Ejercicio en clase</option>
												</select>
											</div>
										</div>
									</div>
									<div className="container" style={{ marginBottom: "5%" }}>
										<h5>Ingresa los numeros por comas</h5>
										<div className="row">
											<label>Valor de 'semilla'</label>
											<input type="text" id="seed" placeholder="9" name="seed" value={this.state.seed} onChange={this.handleInputChange}/>
										</div>
										<div className="row">
											<label>Valor de 'a'</label>
											<input type="text" id="a" placeholder="9" name="a" value={this.state.a} onChange={this.handleInputChange} />
										</div>
										<div className="row">
											<label>Valor de 'c'</label>
											<input type="text" id="c" placeholder="9" name="c" value={this.state.c} onChange={this.handleInputChange}/>'
													</div>
										<div className="row">
											<label>Valor de 'm'</label>'
											<input type="text" id="m" placeholder="9" name="m" value={this.state.m} onChange={this.handleInputChange}/>
										</div>
										<div className="row">
											<label>Numeros a generar</label>
											<input type="number" id="count" placeholder="9" name="count" value={this.state.count} onChange={this.handleInputChange}/>
										</div>
									</div>
								</form>
							</div>
						</div>
						<RNPrinter mtype={this.state.mtype} method={this.props.method} seed={this.state.seed} count={this.state.number} a={this.state.a} c={this.state.c} m={this.state.m} />
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