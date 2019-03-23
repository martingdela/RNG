import React, { Component } from 'react';
import RNForm from './RNForm'

// Style
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import withRoot from '../withRoot'
import Paper from '@material-ui/core/Paper'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const styles = theme => ({
	main: {
        width: 'auto',
        display: 'block',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 900,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
		padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
		minWidth: 900,
		backgroundColor: theme.palette.primary.lighter,
		color: theme.palette.primary.color,
	},
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
		const { classes } = this.props;
		return (
			<div className={classes.main}>
				<CssBaseline />
				<Paper className={classes.paper}>
					<Typography className={classes.title} variant="h3" color="inherit"> Selecciona un método de creación de números aleatorios </Typography>
					<div className="container">
						<div className="row">
							<div className="twelve columns">
								<FormControl className={classes.formControl}>
									<Select className={classes.select} value={this.state.method} onChange={this.onMethodSelect} id="methodSelector">
										<MenuItem disabled selected>Selecciona una opcion</MenuItem>
										<MenuItem value="0">Metodo de Cuadrados Medios</MenuItem>
										<MenuItem value="1">Metodo Congruencial Lineal</MenuItem>
										<MenuItem value="2">Metodo Congruencial Mixto</MenuItem>
										<MenuItem value="3">Metodo Multiplicativo</MenuItem>
										<MenuItem value="4">Generador Congruente Lineal Combinado</MenuItem>
									</Select>
								</FormControl>
								{/*
								<select className="u-full-width" id="methodSelector" value={this.state.method} onChange={this.onMethodSelect}>
									<option disabled selected> Selecciona una opcion </option>
									<option value="0">Metodo de Cuadrados Medios</option>
									<option value="1">Metodo Congruencial Lineal</option>
									<option value="2">Metodo Congruencial Mixto</option>
									<option value="3">Metodo Multiplicativo</option>
									<option value="4">Generador Congruente Lineal Combinado</option>
								</select>*/}
							</div>
						</div>
					</div>
					<RNForm method={this.state.method}/>
				</Paper>
			</div>
		)
	}

}

RNSelector.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(RNSelector))