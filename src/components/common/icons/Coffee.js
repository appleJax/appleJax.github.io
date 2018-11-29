import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Colors from 'Styles/colors'

const Coffee = ({ classes }) =>
  <i
    className={classNames(
      'fas fa-2x fa-coffee',
      classes.icon
    )}
  />

const styles = (theme) => ({
  icon: {
    color: theme.palette.primary.main,
    textShadow: `1px 1px ${Colors.primary.night}`
  }
})

export default withStyles(styles)(Coffee)
