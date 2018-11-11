import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Colors from 'Styles/colors'
import SocialNav from 'Common/SocialNav'
import TitleBar from 'Common/TitleBar'

const NotFoundHeader = ({ classes }) =>
  <div>
    <div className={classes.headerBar}>
      <SocialNav />
    </div>
    <TitleBar className={classes.titleBar} />
  </div>

const styles = (theme) => ({
  headerBar: {
    alignItems: 'center',
    background: Colors.primary.night,
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 0',
    position: 'fixed',
    width: '100vw',
    zIndex: '2'
  },
  titleBar: {
    [theme.breakpoints.down('xs')]: {
      marginTop: '67px'
    }
  }
})

export default withStyles(styles)(NotFoundHeader)