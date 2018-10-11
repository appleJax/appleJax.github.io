import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const Palette = () =>
  <span role='img' aria-label='painter-palette'>🎨</span>

const UnderConstruction = ({ classes }) =>
  <div className={classes.sign}>
    <div className={classes.blackLine}>
      <div className={classes.content}>
        <Typography variant='title' className={classes.label}>
          <Palette /><br/>UNDER<br/>CONSTRUCTION
        </Typography>
      </div>
    </div>
  </div>

const styles = (theme) => ({
  blackLine: {
    border: '5px solid black',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '220px',
    width: '220px'
  },
  content: {
    transform: 'rotate(-45deg)'
  },
  label: {
    fontSize: '2.1em',
    marginTop: '-70px',
    textAlign: 'center'
  },
  sign: {
    background: '#F14C06',
    borderRadius: '15px',
    boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)',
    height: '230px',
    margin: '70px 0',
    padding: '5px',
    transform: 'rotate(45deg)',
    width: '230px'
  }
})

export default withStyles(styles)(UnderConstruction)