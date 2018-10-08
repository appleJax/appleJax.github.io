import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Classes from '../../../styles/classes'
import Colors from '../../../styles/colors'
import PageNav from './PageNav'
import SocialNav from './SocialNav'

const styles = (theme) => ({
  container: {
    ...Classes.flexRow,
    background: Colors.primary.night,
    color: Colors.primary.main,
    padding: '0 10px'
  }
})

const Nav = ({ classes }) =>
  <div className={classes.container}>
    <PageNav/>
    <SocialNav />
  </div>

export default withStyles(styles)(Nav)
