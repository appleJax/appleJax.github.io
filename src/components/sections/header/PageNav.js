import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import NavLink from './NavLink'
import Classes from '../../../styles/classes'

const PageNav = ({ classes }) =>
  <div className={classes.container}>
    <NavLink to='/'>
      HOME
    </NavLink>
    <NavLink to='/projects'>
      PROJECTS
    </NavLink>
    <NavLink to='/open-source'>
      OPEN SOURCE
    </NavLink>
    <NavLink to='/blog'>
      BLOG
    </NavLink>
  </div>

const styles = (theme) => ({
  container: {
    ...Classes.flexRow
  }
})

export default withStyles(styles)(PageNav)