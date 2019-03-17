import React, { Component } from 'react';

class App extends Component {


	constructor(props) {

		super(props)
		this.state = {
			solution: []
		}

		this.onClick = this.onClick.bind(this)
	}

	onClick = (event) => {

	}

	render() {
		return (
			<>
				<div className="container">
					<div class="row" style={{padding: "1%"}}>
						<button onClick={this.onClick} type="submit">Checar</button>
					</div>
				</div>
				<br />
				kolprinter {this.props.alpha}
				{this.props.numbers.map(number => (
					<p>{number}</p>
				))}
			</>
		);
	}
}

export default App;
