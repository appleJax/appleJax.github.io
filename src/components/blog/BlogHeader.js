import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Colors from '../../styles/colors'
import Typography from '@material-ui/core/Typography'

const BlogHeader = ({ classes }) =>
  <div>
    <div className={classes.headerBar}>
      <Typography className={classes.title} variant='title'>
        {`<Insert Catchy Blog Title>`}
      </Typography>
    </div>
  </div>

const styles = (theme) => ({
  headerBar: {
    alignItems: 'center',
    background: Colors.primary.night,
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    width: '100vw',
    zIndex: '2'
  },
  title: {
    color: theme.palette.primary.main
  }
})

export default withStyles(styles)(BlogHeader)