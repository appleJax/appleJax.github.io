import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Classes from '../../../styles/classes'
import Colors from '../../../styles/colors'
import Typography from '@material-ui/core/Typography'
import myPhoto from '../../../images/me.jpeg'

const Logo = ({ classes }) =>
  <div className={classes.container}>
    <img
      alt='Me'
      className={classes.photo}
      src={myPhoto}
    />
    <div className={classes.title}>
      <Typography variant='title'>Kevin Brewer</Typography>
      <Typography variant='body1'>Software Engineer</Typography>
    </div>
  </div>

const styles = (theme) => ({
  container: {
    ...Classes.flexRow,
    justifyContent: 'flex-start',
    width: '33%'
  },
  photo: {
    borderRadius: '50%',
    boxShadow: '3px 3px 15px rgba(0, 0, 0, 0.6)',
    margin: '15px'
  },
  title: {
    ...Classes.flexColumn,
    color: Colors.primary.night,
    textShadow: `1px 1px 1px rgba(255, 255, 255, 0.2)`
  }
})

export default withStyles(styles)(Logo)