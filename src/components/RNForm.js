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
			child: {
				times: 1,
				dataFromChild: {
					seeds: [0],
					as: [0],
					ms: [0],
					count: 0
				}
			}
		}

		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSelector = this.handleSelector.bind(this)
		this.receiveDataFromChild = this.receiveDataFromChild.bind(this)
	}

	handleInputChange = (event) => {
		switch (event.target.id) {
			case "seed":
				this.setState({ seed: event.target.value > 0 ? event.target.value : 0})
				break
			case "count":
				this.setState({ number: event.target.value > 0 ? event.target.value : 0 })
				break
			case "a":
				this.setState({ a: event.target.value > 0 ? event.target.value : 0 })
				break
			case "c":
				this.setState({ c: event.target.value > 0 ? event.target.value : 0 })
				break
			case "m":
				this.setState({ m: event.target.value > 0 ? event.target.value : 0 })
				break
			default:
				alert('DEBUG: SOMETHING HAPPENED')
		}
	}

	handleSelector = (event) => {
		var newState = { ...this.state }

		newState.child.times = event.target.value

		this.setState( newState )
	}

	receiveDataFromChild = (dataFromCallback) => {
		var newState = { ...this.state }

		newState.child.dataFromChild.seeds = dataFromCallback.seeds
		newState.child.dataFromChild.as = dataFromCallback.as
		newState.child.dataFromChild.ms = dataFromCallback.ms
		newState.child.dataFromChild.count = dataFromCallback.count

		this.setState( newState )
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

					<RNPrinter method={this.props.method} seed={this.state.seed} count={this.state.number} a={this.state.a} c={this.state.c} m={this.state.m}/>
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
					</div>
					<RNPrinter method={this.props.method} seed={this.state.seed} count={this.state.number} a={this.state.a} c={this.state.c} m={this.state.m}/>
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
					</div>
					<RNPrinter method={this.props.method} seed={this.state.seed} count={this.state.number} a={this.state.a} c={this.state.c} m={this.state.m}/>
					</>
				)
			case "4":
				return (
					<>
					<h6>Selecciona el número de generadores</h6>
					<select id="timesSelector" value={this.state.child.times} onChange={this.handleSelector}>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>
					<RNFormAux times={this.state.child.times} callbackFromParent={this.receiveDataFromChild}/>
					<RNPrinter method={this.props.method} seeds={this.state.child.dataFromChild.seeds} as={this.state.child.dataFromChild.as} ms={this.state.child.dataFromChild.ms} count={this.state.child.dataFromChild.count} />
					</>
				)
			default:
				return (
					<></>
				)

		}
	}

}

class RNFormAux extends Component {
	constructor(props) {
		super(props)
		this.state = {
			seeds: [0],
			as: [0],
			ms: [0],
			count: 0
		}

		this.handleInputChangeSon = this.handleInputChangeSon.bind(this)
	}

	handleInputChangeSon = (id, event) => {
		var aux = []
		var i 
		switch (event.target.id) {
			case "seed":
				for (i = 0; i < this.props.times; i++) {
					if (this.state.seeds[i]) {
						if (i === id.i) {
							aux[i] = event.target.value > 0 ? event.target.value : 0
						} else {
							aux[i] = this.state.seeds[i]
						}
					} else {
						if (i === id.i) {
							aux[i] = event.target.value > 0 ? event.target.value : 0
						} else {
							aux[i] = 0
						}
					}
				}
				console.log('seed ' + aux)
				this.setState({ seeds: aux })
				break
			
			case "a":
				for (i = 0; i < this.props.times; i++) {
					if (this.state.as[i]) {
						if (i === id.i) {
							aux[i] = event.target.value > 0 ? event.target.value : 0
						} else {
							aux[i] = this.state.as[i]
						}
					} else {
						if (i === id.i) {
							aux[i] = event.target.value > 0 ? event.target.value : 0
						} else {
							aux[i] = 0
						}
					}
				}
				console.log('a ' + aux)
				this.setState({ as: aux })
				break
			
			case "m":
				for (i = 0; i < this.props.times; i++) {
					if (this.state.ms[i]) {
						if (i === id.i) {
							aux[i] = event.target.value > 0 ? event.target.value : 0
						} else {
							aux[i] = this.state.ms[i]
						}
					} else {
						if (i === id.i) {
							aux[i] = event.target.value > 0 ? event.target.value : 0
						} else {
							aux[i] = 0
						}
					}
				}
				console.log('m ' + aux)
				this.setState({ ms: aux })
				break

			case "count":
				this.setState({ count: event.target.value > 0 ? event.target.value : 0 })
				break
			
			default:
				alert('DEBUG: SOMETHING HAPPENED')
		}

		this.props.callbackFromParent(this.state)
	}

	render() {
		const forms = []

		for(var i = 0; i < this.props.times; i++) {
			forms.push(
				<>
					<div class="row" style={{padding: "1%"}}>
						<label>Semilla {i}</label>
						<input type="number" id="seed" value={this.state.seeds[{i}]} onChange={this.handleInputChangeSon.bind(this, {i})} placeholder="1234" name="seed" />
					</div>
					<div class="row" style={{padding: "1%"}}>
						<label>Valor de 'a' {i}</label>
						<input type="number" id="a" value={this.state.as[{i}]} onChange={this.handleInputChangeSon.bind(this, {i})} placeholder="1234" name="a" />
					</div>
					<div class="row" style={{padding: "1%"}}>
						<label>Valor de 'm' {i}</label>
						<input type="number" id="m" value={this.state.ms[{i}]} onChange={this.handleInputChangeSon.bind(this, {i})} placeholder="1234" name="m" />
					</div>
					</>
			)
		}

		return(
			<>
			<br />
			<h5>Llena la siguiente forma</h5>
			<div class="container">
				{forms}
				<div class="row" style={{padding: "1%"}}>
					<label>Numeros a generar</label>
					<input type="number" id="count" value={this.state.count} onChange={this.handleInputChangeSon.bind(this, 0)} placeholder="9" name="count" />
				</div>
			</div>
			</>
		)
	}
}



export default RNForm