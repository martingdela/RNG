import React, { Component } from 'react';
import RNCForm from './RNCForm'

class RNCSelector extends Component {

	constructor(props){
		super(props)
		this.state = {method: "0", numbers: []}

		this.onMethodSelect = this.onMethodSelect.bind(this)
	}

	componentDidMount = () => { 
		let n = []
		for(var i = 0; i < this.props.numbers.length; i++){
			n.push(this.props.numbers[i].random)
		}
		this.setState({numbers: n})
		console.log(n)
	}

	onMethodSelect = (event) => {
		this.setState({method: event.target.value})
	}

	render() {
		return (
			<>			
				<h5> Selecciona un metodo de chequeo de numeros aleatorios </h5>
				<div className="container">
					<div className="row">
						<div className="twelve columns">
							<select className="u-full-width" id="methodSelector" value={this.state.method} onChange={this.onMethodSelect}>
								<option disabled selected> Selecciona una opcion </option>
								<option value="0">Kolmorogov-Smirnov</option>
								<option value="1">Chi-Cuadrada</option>
							</select>
						</div>
					</div>
				</div>
				<RNCForm method={this.state.method} numbers={this.state.numbers}></RNCForm>
			</>
		)
	}

}

export default RNCSelector