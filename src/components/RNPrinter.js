import React, { Component } from 'react';
import RNMethods from '../utilities/rmethods'
import RNCSelector from './RNCSelector'

// Style
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import withRoot from '../withRoot'
import CssBaseline from '@material-ui/core/CssBaseline'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
	button: {
		margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 2}px 25%`,
		minWidth: 150,
		minHeight: 50,
		fontSize: 12,
	},
	title: {
		padding: `${theme.spacing.unit * 5}px 0 ${theme.spacing.unit * 3}px 0`,
		textAlign: 'center',
	},
	table: {
		minWidth: 500,
	},
})

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
		const { classes } = this.props
		console.log(this.props.a)
		return (
			<div>
				<CssBaseline />
				<div className="container">
					<div className="row" style={{ padding: "1%" }}>
						<Button onClick={this.onClick} type="submit" variant="contained" color="primary" className={classes.button}>Generar</Button>
					</div>
				</div>
				{this.state.solution.length === 0 ? (
					<Typography className={classes.title} variant="h4" color="inherit">No hay elementos en la tabla</Typography>
				): this.props.method === "0" ? (
					<Table className={classes.table}>
						<TableHead>
							<TableRow>
								<TableCell> Number </TableCell>
								<TableCell> Seed </TableCell>
								<TableCell> Pre-Random </TableCell>
								<TableCell> Random </TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{this.state.solution.map(step => (
								<TableRow>
									<TableCell>{step.n}</TableCell>
									<TableCell>{step.seed}</TableCell>
									<TableCell>{step.prerandom}</TableCell>
									<TableCell>{step.random}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				): this.props.method === "1" ? (
					<Table className={classes.table}>
						<TableHead>
							<TableRow>
								<TableCell> Number </TableCell>
								<TableCell> Seed </TableCell>
								<TableCell> Pre-Random </TableCell>
								<TableCell> Random </TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{this.state.solution.map(step => (
								<TableRow>
									<TableCell>{step.n}</TableCell>
									<TableCell>{step.seed}</TableCell>
									<TableCell>{step.prerandom}</TableCell>
									<TableCell>{step.random}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				): this.props.method === "2" ? (
					<Table className={classes.table}>
						<TableHead>
							<TableRow>
								<TableCell> Number </TableCell>
								<TableCell> Seed </TableCell>
								<TableCell> Pre-Random </TableCell>
								<TableCell> Random </TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{this.state.solution.map(step => (
								<TableRow>
									<TableCell>{step.n}</TableCell>
									<TableCell>{step.seed}</TableCell>
									<TableCell>{step.prerandom}</TableCell>
									<TableCell>{step.random}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				): this.props.method === "3" ?(
					<Table className={classes.table}>
						<TableHead>
							<TableRow>
								<TableCell> Number </TableCell>
								<TableCell> Seed </TableCell>
								<TableCell> Pre-Random </TableCell>
								<TableCell> Random </TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{this.state.solution.map(step => (
								<TableRow>
									<TableCell>{step.n}</TableCell>
									<TableCell>{step.seed}</TableCell>
									<TableCell>{step.prerandom}</TableCell>
									<TableCell>{step.random}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				): (
					<>
					<Table className={classes.table}>
						<TableBody>
							<TableCell>
								<TableRow>
									<TableRow><TableCell> n </TableCell></TableRow>
									{this.props.a.split(',').map(a => (
										<TableRow><TableCell>Xn</TableCell></TableRow>
									))}
									<TableRow><TableCell> Wn </TableCell></TableRow>
									<TableRow><TableCell> Random </TableCell></TableRow>
								</TableRow>
							</TableCell>
							{this.state.solution.map(step => (
								<TableCell>
									<TableRow><TableCell>{step.j}</TableCell></TableRow>
									{step.gns.map(s => (
										<TableRow><TableCell>{s.Xn}</TableCell></TableRow>
									))}
									<TableRow><TableCell>{step.wj}</TableCell></TableRow>
									<TableRow><TableCell>{step.random}</TableCell></TableRow>
								</TableCell>
							))}
						</TableBody>
					</Table>
					</>
				)}

				{this.state.solution.length > 0 ? (
					<RNCSelector numbers={this.state.solution}/>
				) : (
					<></>
				)}

			</div>
		);
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(App))
