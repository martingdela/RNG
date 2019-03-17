import React, { Component } from 'react';
import checker from '../utilities/checker'

class App extends Component {


	constructor(props) {

		super(props)
		this.state = {
			feisqrsum : 0,
			g: 0,
			table : [],
			size: 0,
			max: 0,
			min: 0,
			range: 0,
			k: 0,
			tsize: 0
		}

		this.onClick = this.onClick.bind(this)
	}

	onClick = (event) => {
		var result = checker.chisquare(this.props.numbers,parseFloat(this.props.alpha))
		this.setState({
			feisqrsum : result[0],
			g: result[1],
			table : result[2],
			size: result[3],
			max: result[4],
			min: result[5],
			range: result[6],
			k: result[7],
			tsize: result[8]
		})
	}

	render() {
		return (
			<>
				<div className="container">
					<div class="row" style={{ padding: "1%" }}>
						<button onClick={this.onClick} type="submit">Checar</button>
					</div>
				</div>
				<br/>
				{this.state.table.length === 0 ? (<>
					<h1> No hay tabla (aun)</h1>
				</>) : (<>
				<table style={{width: "80%"}}>
					<tr>
						<td>Size</td>
						<td>{this.state.size}</td>
					</tr>
					<tr>
						<td>Maximum number</td>
						<td>{this.state.max}</td>
					</tr>
					<tr>
						<td>Minimum number</td>
						<td>{this.state.min}</td>
					</tr>
					<tr>
						<td>Range</td>
						<td>{this.state.range}</td>
					</tr>
					<tr>
						<td>K</td>
						<td>{this.state.k}</td>
					</tr>
					<tr>
						<td>tsize</td>
						<td>{this.state.tsize}</td>
					</tr>
				</table>
				<br/>
					<table style={{ width: "80%" }}>
						<tr>
							<th> i </th>
							<th> Lower Bound </th>
							<th> Upper Bound </th>
							<th> |F0 absoluto| </th>
							<th> F0 relativo </th>
							<th> i / k </th>
							<th> FEI - FO^2 / FEI </th>
						</tr>
						{this.state.table.map(step => (
							<tr>
								<td>{step.i}</td>
								<td>{step.lowerb}</td>
								<td>{step.upperb}</td>
								<td>{step.f0abs}</td>
								<td>{step.f0rel}</td>
								<td>{step.fei}</td>
								<td>{step.feisq}</td>
							</tr>
						))}
					</table>

						<table style={{ width: "80%" }}>
							<tr>
								<th>Suma de FEI^2</th>
								<th>Operacion</th>
								<th>Indice Gamma</th>
							</tr>
							<tr>
								<td>{this.state.feisqrsum}</td>
								<td>{this.state.feisqrsum > this.state.g ? ">" : "<"}</td>
								<td>{this.state.g}</td>
							</tr>
						</table>
				</>)}

			</>
		);
	}
}

export default App;
