import React, { Component } from 'react';
import RNMethods from '../utilities/rmethods'
import RNCSelector from './RNCSelector'

class App extends Component {


	constructor(props) {

		super(props)
		this.state = {
			solution: []
		}

		this.onClick = this.onClick.bind(this)
	}

	onClick = (event) => {
		switch (this.props.method) {
			case "0":
				this.setState({ solution: RNMethods.middleSquares(this.props.seed, this.props.count) })
				break
			case "1":
				this.setState({solution: RNMethods.congruentialMethod(
					this.props.seed,
					this.props.a,
					this.props.c,
					this.props.m,
					this.props.count
				)})
				break
			case "2":
				this.setState({solution: RNMethods.congruentialMixedMethod(
					this.props.seed,
					this.props.a,
					this.props.c,
					this.props.m,
					this.props.count
				)})
				break
			case "3":
				this.setState({solution: RNMethods.congruentialMultiplicative(
					this.props.seed,
					this.props.a,
					this.props.m,
					this.props.count
				)})
				break
			case "4":
				if(this.props.mtype === 0){
					this.setState({solution: RNMethods.congruentialLinearCombinated(
						this.props.seed.split(','),
						this.props.a.split(','),
						this.props.m.split(','),
						this.props.c.split(','),
						this.props.count,
						this.props.a.split(',').length
					)})
				} else {
					this.setState({solution: RNMethods.congruentialLinearCombinatedClase(
						this.props.seed.split(','),
						this.props.a.split(','),
						this.props.m.split(','),
						this.props.c.split(','),
						this.props.count,
						this.props.a.split(',').length
					)})
				}
				break
			default:
				
		}
	}

	render() {
		return (
			<>
				<div className="container">
					<div className="row" style={{ padding: "1%" }}>
						<button onClick={this.onClick} type="submit">Generar</button>
					</div>
				</div>
				<br/>
				{this.state.solution.length === 0 ? (
					<h1> No hay elementos en la tabla </h1>
				): this.props.method === "0" ? (
					<table style={{width: "80%"}}>
						<tr>
							<th> Number </th>
							<th> Seed </th>
							<th> Pre-Random </th>
							<th> Random </th>
						</tr>
						{this.state.solution.map(step =>(
							<tr>
								<td>{step.n}</td>
								<td>{step.seed}</td>
								<td>{step.prerandom}</td>
								<td>{step.random}</td>
							</tr>
						))}
					</table>
				): this.props.method === "1" ? (
					<table style={{width: "80%"}}>
						<tr>
							<th> Number </th>
							<th> Seed </th>
							<th> Pre-Random </th>
							<th> Random </th>
						</tr>
						{this.state.solution.map(step =>(
							<tr>
								<td>{step.n}</td>
								<td>{step.seed}</td>
								<td>{step.prerandom}</td>
								<td>{step.random}</td>
							</tr>
						))}
					</table>
				): this.props.method === "2" ? (
					<table style={{width: "80%"}}>
						<tr>
							<th> Number </th>
							<th> Seed </th>
							<th> Pre-Random </th>
							<th> Random </th>
						</tr>
						{this.state.solution.map(step =>(
							<tr>
								<td>{step.n}</td>
								<td>{step.seed}</td>
								<td>{step.prerandom}</td>
								<td>{step.random}</td>
							</tr>
						))}
					</table>
				): this.props.method === "3" ?(
					<table style={{width: "80%"}}>
						<tr>
							<th> Number </th>
							<th> Seed </th>
							<th> Pre-Random </th>
							<th> Random </th>
						</tr>
						{this.state.solution.map(step =>(
							<tr>
								<td>{step.n}</td>
								<td>{step.seed}</td>
								<td>{step.prerandom}</td>
								<td>{step.random}</td>
							</tr>
						))}
					</table>
				): (
					<table style={{width: "80%"}}>
					<td>
						<tr>
							<tr>
								<td> n </td>
							</tr>
								{this.props.a.split(',').map(a => (
									<tr>
										<td> Xn </td>
									</tr>
								))}
							<tr>
								<td> Wn </td>
							</tr>
							<tr>
								<td> Random </td>
							</tr>
						</tr>
						</td>
						
						{this.state.solution.map(step =>(
							<>
							<td>
							<tr>
								<td>{step.j}</td>
							</tr>
							
							{step.gns.map(s => (
								<tr>
									<td>{s.Xn}</td>
								</tr>
							))}
							
							<tr>
								<td>{step.wj}</td>
							</tr>
							<tr>
								<td>{step.random}</td>
							</tr>
							</td>
							</>
							
							
						))}
					</table>
				)}

				{this.state.solution.length > 0 ? (
					<RNCSelector numbers={this.state.solution}/>
				) : (
					<></>
				)}

			</>
		);
	}
}

export default App;
