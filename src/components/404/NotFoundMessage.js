import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Classes from '../../styles/classes'
import Colors from '../../styles/colors'
import Typography from '@material-ui/core/Typography'

class NotFoundMessage extends Component {
  constructor() {
    super()

    this.state = { path: '/404' }
  }

  componentDidMount() {
    this.setState({ path: window.location.pathname })

  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
        <Typography variant='title' className={classes.main}>
          404
        </Typography>
        <Typography variant='headline' className={classes.msg}>
          Sorry, the route <code className={classes.path}>{this.state.path}</code> doesn't exist
        </Typography>
      </div>
    )
  }
}

const styles = (theme) => ({
  container: {
    ...Classes.flexColumn
  },
  main: {
    color: theme.palette.secondary.main,
    fontSize: '10em',
    marginTop: '15px',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)'
  },
  msg: {
    color: theme.palette.secondary.main,
    textAlign: 'center'
  },
  path: {
    background: theme.palette.secondary.main,
    color: Colors.secondary.bright,
    fontWeight: 'bold',
    padding: '5px 8px'
  }
})

export default withStyles(styles)(NotFoundMessage)
