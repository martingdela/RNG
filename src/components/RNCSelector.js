import React, { Component } from 'react';
import RNCForm from './RNCForm'

// Style
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import withRoot from '../withRoot'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const styles = theme => ({
	title: {
		padding: `0 0 ${theme.spacing.unit * 2}px`,
	},
	formControl: {
		margin: theme.spacing.unit,
		minWidth: 650,
		alignItems: 'center',
	},
	select: {
		fontSize: 16,
	},
})

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
		const { classes } = this.props
		return (
			<>		
				<CssBaseline />
				<Typography className={classes.title} variant="h3" color="inherit"> Selecciona un metodo de chequeo de numeros aleatorios </Typography>	
				<div className="container">
					<div className="row">
						<div className="twelve columns">
							<FormControl className={classes.formControl}>
								<Select className={classes.select} id="methodSelector" value={this.state.method} onChange={this.onMethodSelect}>
									<MenuItem disabled selected> Selecciona una opcion </MenuItem>
									<MenuItem value="0">Kolmorogov-Smirnov</MenuItem>
									<MenuItem value="1">Chi-Cuadrada</MenuItem>
								</Select>
							</FormControl>
						</div>
					</div>
				</div>
				<RNCForm method={this.state.method} numbers={this.state.numbers}></RNCForm>
			</>
		)
	}

}

RNCSelector.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(RNCSelector))