import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Colors from 'Styles/colors'
import Typography from '@material-ui/core/Typography'
import Coffee from 'Icons/Coffee'

const BlogHeader = ({ classes }) =>
  <div>
    <div className={classes.headerBar}>
      <Coffee />
      <Typography className={classes.title} variant='h6'>
        brewLog
      </Typography>
    </div>
  </div>

const styles = (theme) => ({
  headerBar: {
    alignItems: 'center',
    background: Colors.primary.night,
    display: 'flex',
    padding: '10px',
    width: '100vw',
    zIndex: '2'
  },
  title: {
    color: theme.palette.primary.main,
    fontFamily: 'Carter One',
    marginLeft: '10px',
    textShadow: `1px 1px ${Colors.primary.night}`
  }
})

export default withStyles(styles)(BlogHeader)