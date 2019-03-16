import React, { Component } from 'react';
import RNForm from './RNForm'

class RNSelector extends Component {

	constructor(props){
		super(props)
		this.state = {method: "0"}

		this.onMethodSelect = this.onMethodSelect.bind(this)
	}

	onMethodSelect = (event) => {
		this.setState({method: event.target.value})
	}

	render() {
		return (
			<>
				<label>1) Selecciona un metodo de creacion de numeros aleatorios</label>
				<div className="container">
					<div className="row">
						<div className="twelve columns">
							<select className="u-full-width" id="methodSelector" value={this.state.method} onChange={this.onMethodSelect}>
								<option disabled selected> Selecciona una opcion </option>
								<option value="0">Metodo de Cuadrados Medios</option>
								<option value="1">Metodo Congruencial Lineal</option>
								<option value="2">Metodo Congruencial Mixto</option>
								<option value="3">Metodo Multiplicativo</option>
								<option value="4">Generador Congruente Lineal Combinado</option>
							</select>
						</div>
					</div>
				</div>
				<RNForm method={this.state.method}/>
			</>
		)
	}

}

export default RNSelector