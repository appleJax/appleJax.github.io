import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Nav from './Nav'
import TitleBar from './TitleBar'

const styles = (theme) => ({
  container: {
    width: '100vw'
  }
})

const Header = ({ classes }) =>
  <div className={classes.container}>
    <Nav />
    <TitleBar />
  </div>

export default withStyles(styles)(Header)
