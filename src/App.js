import React, { Component } from 'react'

// Style
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import withRoot from './withRoot'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

// CSS Elements
import './skeleton.css'
import './normalize.css'


// Components
import RNSelector from './components/RNSelector'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.color,
  }
})

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} class="container">
        <AppBar className={classes.bar} position="static" color="default">
          <Toolbar> 
            <Typography variant="h3" color="inherit">
              Random Number Generator
            </Typography>
          </Toolbar>
        </AppBar>
        <RNSelector/>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(App))
