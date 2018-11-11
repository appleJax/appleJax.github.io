import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Classes from 'Styles/classes'
import Colors from 'Styles/colors'
import Typography from '@material-ui/core/Typography'

const NotFoundMessage = ({ classes }) =>
  <div className={classes.container}>
    <Typography variant='h6' className={classes.main}>
      404
    </Typography>
    <Typography variant='h5' className={classes.msg}>
      Sorry, that route doesn't exist.
    </Typography>
  </div>

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
