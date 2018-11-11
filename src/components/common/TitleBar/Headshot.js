import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Classes from 'Styles/classes'
import Colors from 'Styles/colors'
import Typography from '@material-ui/core/Typography'
import myPhoto from 'Images/me.jpeg'

const Headshot = ({ classes }) =>
  <div className={classes.container}>
    <img
      alt='Me'
      className={classes.photo}
      src={myPhoto}
    />
    <div className={classes.title}>
      <Typography className={classes.titleLine} variant='h6'>
        Kevin Brewer
      </Typography>
      <Typography className={classes.titleLine} variant='body1'>
        Software Engineer
      </Typography>
    </div>
  </div>

const styles = (theme) => ({
  container: {
    ...Classes.flexRow,
    justifyContent: 'flex-start',
    width: '33%',
    [theme.breakpoints.down('sm')]: {
      width: '50%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
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
  },
  titleLine: {
    textAlign: 'center'
  }
})

export default withStyles(styles)(Headshot)