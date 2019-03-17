import React, { Component } from 'react';

class App extends Component {


	constructor(props) {

		super(props)
		this.state = {
			solution: []
		}
	}

	render() {
		return (
			<>
				<br/>
				chi printer{this.props.alpha}
				{this.props.numbers.map(number => (
					<p>{number}</p>
				))}

			</>
		);
	}
}

export default App;
