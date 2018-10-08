import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Link from '../../common/Link'
import Colors from '../../../styles/colors'
import Typography from '@material-ui/core/Typography'

const NavLink = ({
  children,
  classes,
  to
}) =>
  <Link
    to={to}
    className={classes.link}
    activeClassName={classes.active}
  >
    <Typography
      variant='body1'
      color='inherit'
    >
      {children}
    </Typography>
  </Link>

const styles = (theme) => ({
  link: {
    borderBottom: `5px solid ${Colors.primary.night}`,
    borderRadius: '0',
    color: Colors.primary.main,
    margin: 0,
    padding: '10px 15px',
    '&:hover': {
      background: Colors.primary.light,
      borderBottom: `5px solid ${Colors.primary.light}`,
      color: Colors.primary.night
    }
  },
  active: {
    borderBottom: `5px solid ${Colors.primary.light}`,
    color: Colors.primary.highlight,
    '&:hover': {
      background: 'inherit',
      borderBottom: `5px solid ${Colors.primary.light}`,
      color: Colors.primary.highlight,
      cursor: 'default'
    }
  }
})

export default withStyles(styles)(NavLink)