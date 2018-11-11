import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Colors from '../../styles/colors'

const SectionTitle = ({ classes, children }) =>
  <Typography
    className={classes.title}
    variant='h6'
  >
    {children}
  </Typography>

const styles = (theme) => ({
  title: {
    border: `4px solid ${theme.palette.secondary.main}`,
    borderLeft: 'none',
    borderRight: 'none',
    color: theme.palette.secondary.main,
    fontSize: '2.5em',
    margin: '80px 0 30px',
    opacity: '0.9',
    padding: '10px 15px',
    textShadow: `1px 1px 2px ${Colors.secondary.highlight}`,
    [theme.breakpoints.down('sm')]: {
      margin: '50px 0 20px'
    }
  }
})

export default withStyles(styles)(SectionTitle)
