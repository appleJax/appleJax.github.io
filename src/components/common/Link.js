import React from 'react'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'

const CustomLink = ({
  children,
  classes,
  className,
  to,
  activeClassName
}) =>
  <Link
    exact='true'
    to={to}
    className={classNames(className, classes.link)}
    activeClassName={activeClassName}
  >
    {children}
  </Link>

const styles = (theme) => ({
  link: {
    textDecoration: 'none'
  }
})

export default withStyles(styles)(CustomLink)
