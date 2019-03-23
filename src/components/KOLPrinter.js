import React, { Component } from 'react';
import checker from '../utilities/checker'

class App extends Component {


	constructor(props) {

		super(props)
		this.state = {
			dMInus: 0,
			dPLus: 0,
			D: 0,
			k: 0,
			table: []
		}

		this.onClick = this.onClick.bind(this)
	}

	onClick = (event) => {
		var result = checker.kolmorogovTest(this.props.numbers, parseFloat(this.props.alpha))
		this.setState({
			dMInus: result[0],
			dPLus: result[1],
			D: result[2],
			k: result[3],
			table: result[4]
		})
		console.log(result)
	}

	render() {
		return (
			<>
				<div className="container">
					<div class="row" style={{ padding: "1%" }}>
						<button onClick={this.onClick} type="submit">Checar</button>
					</div>
				</div>
				<br />
				{this.state.table.length === 0 ? (<>
					<h1> No hay tabla (aun)</h1>
				</>) : (<>
					<table style={{ width: "80%" }}>
						<tr>
							<th> i </th>
							<th> F(x)</th>
							<th> i / n</th>
							<th> i / n - F(xi) </th>
							<th> (F(xi-1) - i)/(n) </th>
						</tr>
						{this.state.table.map(step => (
							<tr>
								<td>{step.i}</td>
								<td>{step.num}</td>
								<td>{step.iOVERn}</td>
								<td>{step.iOVERnMINUSfxi}</td>
								<td>{step.fxiMINUSiMINUS1OVERn}</td>
							</tr>
						))}
					</table>
				</>)}
				<br />
				{this.state.dMInus.length === 0 ? (<></>) : (
					<>
						<table style={{ width: "80%" }}>
							<tr>
								<th>D-</th>
								<th>D+</th>
							</tr>
							<tr>
								<td>{this.state.dMInus}</td>
								<td>{this.state.dPLus}</td>
							</tr>
						</table>
						<h5> D = {this.state.D} </h5>
						<br />
						<table style={{ width: "80%" }}>
							<tr>
								<th>D</th>
								<th>Operacion</th>
								<th>Indice de Kolmorogov</th>
							</tr>
							<tr>
								<td>{this.state.D}</td>
								<td>{this.state.D > this.state.k ? ">" : "<"}</td>
								<td>{this.state.k}</td>
							</tr>
						</table>

						{this.state.D > this.state.k ? <h4> No cumple </h4> : <h4> Si cumple</h4>}
					</>
				)}
			</>
		);
	}
}

export default App;
