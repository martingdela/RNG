import React, { Component } from 'react';
import CHIPrinter from './CHIPrinter'
import KOLPrinter from './KOLPrinter'

// Style
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import withRoot from '../withRoot'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import FormHelperText from '@material-ui/core/FormHelperText'

const styles = theme => ({
	title: {
		padding: `${theme.spacing.unit * 5}px 0 ${theme.spacing.unit * 3}px 0`,
		textAlign: 'center',
	},
	formControl: {
		margin: theme.spacing.unit,
		minWidth: 600,
		alignItems: 'center',
	},
	select: {
		fontSize: 16,
		minWidth: 200,
	},
	helperText: {
		fontSize: 11,
	},
})

class RNCForm extends Component {

	constructor(props) {
		super(props)
		this.state = {
			alpha: 0.20
		}

		this.handleInputChange = this.handleInputChange.bind(this)
	}

	handleInputChange = (event) => {
		switch (event.target.id) {
			case "alpha":
				this.setState({ alpha: event.target.value })
				break
			default:
				break
		}
	}

	render() {
		const { classes } = this.props
		switch (this.props.method) {
			case "0":
				return (
					<>
						<CssBaseline />
						<Typography className={classes.title} variant="h4" color="inherit">Llena la siguiente forma</Typography>
						<div class="container">
							<div class="row" style={{ padding: "1%" }}>
								<div className="row">
									<div className="twelve columns">
										<FormControl className={classes.formControl}>
											<Select className={classes.select} id="alpha" value={this.state.alpha} onChange={this.handleInputChange}>
												<MenuItem disabled selected> Selecciona una opcion </MenuItem>
												<MenuItem value="0.20">0.20</MenuItem>
												<MenuItem value="0.10">0.10</MenuItem>
												<MenuItem value="0.05">0.05</MenuItem>
												<MenuItem value="0.02">0.02</MenuItem>
												<MenuItem value="0.01">0.01</MenuItem>
												<MenuItem value="0.005">0.005</MenuItem>
												<MenuItem value="0.002">0.002</MenuItem>
												<MenuItem value="0.001">0.001</MenuItem>
											</Select>
											<FormHelperText className={classes.helperText}>Alpha</FormHelperText>
										</FormControl>
									</div>
								</div>
							</div>
						</div>
						<KOLPrinter numbers={this.props.numbers} alpha={this.state.alpha} />
					</>
				)

			case "1":
				return (
					<>
						<CssBaseline />
						<Typography className={classes.title} variant="h4" color="inherit">Llena la siguiente forma</Typography>
						<div class="container">
							<div class="row" style={{ padding: "1%" }}>
								<div className="row">
									<div className="twelve columns">
										<FormControl className={classes.formControl}>
											<Select className={classes.select} id="alpha" value={this.state.alpha} onChange={this.handleInputChange}>
												<MenuItem disabled selected> Selecciona una opcion </MenuItem>
												<MenuItem value="0.20">0.20</MenuItem>
												<MenuItem value="0.10">0.10</MenuItem>
												<MenuItem value="0.05">0.05</MenuItem>
												<MenuItem value="0.02">0.02</MenuItem>
												<MenuItem value="0.01">0.01</MenuItem>
												<MenuItem value="0.005">0.005</MenuItem>
												<MenuItem value="0.002">0.002</MenuItem>
												<MenuItem value="0.001">0.001</MenuItem>
											</Select>
											<FormHelperText className={classes.helperText}>Alpha</FormHelperText>
										</FormControl>
									</div>
								</div>
							</div>
						</div>
						<CHIPrinter numbers={this.props.numbers} alpha={this.state.alpha} />
					</>
				)

			default:
				return (
					<></>
				)

		}
	}

}

RNCForm.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(RNCForm))