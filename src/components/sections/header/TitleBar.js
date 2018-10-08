import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Logo from './Logo'
import KataLinks from './KataLinks'
import Classes from '../../../styles/classes'

const TitleBar = ({ classes }) =>
  <div className={classes.container}>
    <Logo />
    <KataLinks />
    <div className={classes.spacer} />
  </div>

const styles = (theme) => ({
  container: {
    ...Classes.flexRow,
    justifyContent: 'space-between',
    background: theme.palette.primary.main,
    color: theme.palette.primary.dark,
    display: 'flex',
    alignItems: 'center'
  },
  spacer: {
    width: '33%'
  }
})

export default withStyles(styles)(TitleBar)