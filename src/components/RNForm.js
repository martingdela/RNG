import React, { Component } from 'react';
import RNPrinter from './RNPrinter'

// Style
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import withRoot from '../withRoot'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'

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
	title: {
		padding: `${theme.spacing.unit * 5}px 0 ${theme.spacing.unit * 3}px 0`,
		textAlign: 'center',
	},
	subtitle: {
		padding: `0 0 ${theme.spacing.unit}px 0`,
	},
	input: {
		backgroundColor: theme.palette.primary.lighter,
		minWidth: 170,
		fontSize: 12,
		padding: `0 0 ${theme.spacing.unit*2}px 0`
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

class RNForm extends Component {

	constructor(props) {
		super(props)
		this.state = {
			seed: 0,
			number: 0,
			a: 0,
			c: 0,
			m: 0,
			mtype: 0
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this)
	}

	handleInputChange = (event) => {
		switch (event.target.id) {
			case "seed":
				this.setState({ seed: event.target.value})
				break
			case "count":
				this.setState({ number: event.target.value})
				break
			case "a":
				this.setState({ a: event.target.value})
				break
			case "c":
				this.setState({ c: event.target.value})
				break
			case "m":
				this.setState({ m: event.target.value})
				break
			case "mtype":
				this.setState({ mtype: event.target.value})
					break
			default:
				alert('DEBUG: SOMETHING HAPPENED')
		}
	}

	handleSubmit = event => {
		event.preventDefault();
		const data = new FormData(event.target);
		console.log(data)
	}

	render() {
		const { classes } = this.props;
		switch (this.props.method) {
			case "0":
				return (
					<div className="main">
						<CssBaseline/>
						<Typography className={classes.title} variant="h4" color="inherit">Llena la siguiente forma</Typography>
						<div class="container">
							<div className="row" style={{ padding: "1%" }}>
								<Typography className={classes.subtitle} variant="h5" color="inherit">Semilla</Typography>
								<Input className={classes.input} type="number" id="seed" placeholder="1234" name="seed" value={this.state.seed} onChange={this.handleInputChange} />
							</div>
							<div className="row" style={{ padding: "1%" }}>
								<Typography className={classes.subtitle} variant="h5" color="inherit">Numeros a generar</Typography>
								<Input className={classes.input} type="number" id="count" placeholder="9" name="count" value={this.state.number} onChange={this.handleInputChange} />
							</div>

						</div>

						<RNPrinter method={this.props.method} seed={this.state.seed} count={this.state.number} a={this.state.a} c={this.state.c} m={this.state.m} />
					</div>
				)

			case "1": case "2":
				return (
					<div className="main">
						<CssBaseline />
						<Typography className={classes.title} variant="h4" color="inherit">Llena la siguiente forma</Typography>
						<div class="container">
							<div class="row" style={{ padding: "1%" }}>
								<Typography className={classes.subtitle} variant="h5" color="inherit">Semilla</Typography>
								<Input className={classes.input} type="number" id="seed" placeholder="1234" name="seed" value={this.state.seed} onChange={this.handleInputChange} />
							</div>
							<div class="row" style={{ padding: "1%" }}>
								<Typography className={classes.subtitle} variant="h5" color="inherit">Valor de 'a'</Typography>
								<Input className={classes.input} type="number" id="a" value={this.state.a} onChange={this.handleInputChange} placeholder="1234" name="a" />
							</div>
							<div class="row" style={{ padding: "1%" }}>
								<Typography className={classes.subtitle} variant="h5" color="inherit">Valor de 'c'</Typography>
								<Input className={classes.input} type="number" id="c" value={this.state.c} onChange={this.handleInputChange} placeholder="1234" name="c" />
							</div>
							<div class="row" style={{ padding: "1%" }}>
								<Typography className={classes.subtitle} variant="h5" color="inherit">Valor de 'm'</Typography>
								<Input className={classes.input} type="number" id="m" value={this.state.m} onChange={this.handleInputChange} placeholder="1234" name="m" />
							</div>
							<div class="row" style={{ padding: "1%" }}>
								<Typography className={classes.subtitle} variant="h5" color="inherit">Numeros a generar</Typography>
								<Input className={classes.input} type="number" id="count" value={this.state.count} onChange={this.handleInputChange} placeholder="9" name="count" />
							</div>
						</div>
						<RNPrinter method={this.props.method} seed={this.state.seed} count={this.state.number} a={this.state.a} c={this.state.c} m={this.state.m} />
					</div>
				)

			case "3":
				return (
					<div className="main">
						<CssBaseline />
						<Typography className={classes.title} variant="h4" color="inherit">Llena la siguiente forma</Typography>
						<div class="container">
							<div class="row" style={{ padding: "1%" }}>
								<Typography className={classes.subtitle} variant="h5" color="inherit">Semilla</Typography>
								<Input className={classes.input} type="number" id="seed" placeholder="1234" name="seed" value={this.state.seed} onChange={this.handleInputChange} />
							</div>
							<div class="row" style={{ padding: "1%" }}>
								<Typography className={classes.subtitle} variant="h5" color="inherit">Valor de 'a'</Typography>
								<Input className={classes.input} type="number" id="a" value={this.state.a} onChange={this.handleInputChange} placeholder="1234" name="a" />
							</div>
							<div class="row" style={{ padding: "1%" }}>
								<Typography className={classes.subtitle} variant="h5" color="inherit">Valor de 'm'</Typography>
								<Input className={classes.input} type="number" id="m" value={this.state.m} onChange={this.handleInputChange} placeholder="1234" name="m" />
							</div>
							<div class="row" style={{ padding: "1%" }}>
								<Typography className={classes.subtitle} variant="h5" color="inherit">Numeros a generar</Typography>
								<Input className={classes.input} type="number" id="count" value={this.state.count} onChange={this.handleInputChange} placeholder="9" name="count" />
							</div>
						</div>
						<RNPrinter method={this.props.method} seed={this.state.seed} count={this.state.number} a={this.state.a} c={this.state.c} m={this.state.m} />
					</div>
				)
			case "4":
				return (
					<div className="main">
						<CssBaseline />
						<div className="container" style={{ marginTop: "3%" }}>
							<div className="row">
								<form onSubmit={this.handleSubmit}>
									<div className="container">
										<div className="row">
											<div className="twelve columns">
												<select className="u-full-width" id="mtype" value={this.state.mtype} onChange={this.handleInputChange}>
													<option disabled selected> Selecciona una opcion </option>
													<option value="0">L'ecuyer</option>
													<option value="1">Ejercicio en clase</option>
												</select>
											</div>
										</div>
									</div>
									<div className="container" style={{ marginBottom: "5%" }}>
										<h5>Ingresa los numeros por comas</h5>
										<div className="row">
											<label>Valor de 'semilla'</label>
											<input type="text" id="seed" placeholder="9" name="seed" value={this.state.seed} onChange={this.handleInputChange}/>
										</div>
										<div className="row">
											<label>Valor de 'a'</label>
											<input type="text" id="a" placeholder="9" name="a" value={this.state.a} onChange={this.handleInputChange} />
										</div>
										<div className="row">
											<label>Valor de 'c'</label>
											<input type="text" id="c" placeholder="9" name="c" value={this.state.c} onChange={this.handleInputChange}/>'
													</div>
										<div className="row">
											<label>Valor de 'm'</label>'
											<input type="text" id="m" placeholder="9" name="m" value={this.state.m} onChange={this.handleInputChange}/>
										</div>
										<div className="row">
											<label>Numeros a generar</label>
											<input type="number" id="count" placeholder="9" name="count" value={this.state.count} onChange={this.handleInputChange}/>
										</div>
									</div>
								</form>
							</div>
						</div>
						<RNPrinter mtype={this.state.mtype} method={this.props.method} seed={this.state.seed} count={this.state.number} a={this.state.a} c={this.state.c} m={this.state.m} />
					</div>
				)
			default:
				return (
					<></>
				)

		}
	}

}

RNForm.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(RNForm))