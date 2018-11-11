import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Headshot from './Headshot'
import KataLinks from './KataLinks'
import Classes from 'Styles/classes'

const TitleBar = ({ classes, className }) =>
  <div className={classNames(className, classes.container)}>
    <Headshot />
    <KataLinks />
    <div className={classes.spacer} />
  </div>

const styles = (theme) => ({
  container: {
    ...Classes.flexRow,
    alignItems: 'center',
    background: theme.palette.primary.main,
    color: theme.palette.primary.dark,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '50px',
    paddingBottom: '12px',
    width: '100vw',
    [theme.breakpoints.down('xs')]: {
      marginTop: '95px'
    }
  },
  spacer: {
    width: '33%',
    [theme.breakpoints.down('sm')]: {
      width: '0'
    }
  }
})

export default withStyles(styles)(TitleBar)