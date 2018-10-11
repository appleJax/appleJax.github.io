import React from 'react'
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'
import Colors from '../../styles/colors'
import Typography from '@material-ui/core/Typography'

const ButtonLink = ({ classes, children, to }) =>
  <Link className={classes.link} to={to}>
    <Typography className={classes.label} variant='title'>
      {children}
    </Typography>
  </Link>

const styles = (theme) => ({
  label: {
    background: Colors.secondary.main,
    borderRadius: '10px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.4)',
    color: Colors.secondary.bright,
    padding: '15px 20px',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)',
    '&:hover': {
      background: Colors.secondary.light,
    }
  },
  link: {
    margin: '10px 35px',
    textAlign: 'center',
    textDecoration: 'none',
    width: '110px',
    [theme.breakpoints.down('xs')]: {
      margin: '10px 25px'
    }
  }
})

export default withStyles(styles)(ButtonLink)