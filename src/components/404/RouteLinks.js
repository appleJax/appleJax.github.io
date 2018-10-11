import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Classes from '../../styles/classes'
import ButtonLink from '../common/ButtonLink'

const RouteLinks = ({ classes }) =>
  <div className={classes.container}>
    <ButtonLink to='/'>
      Home
    </ButtonLink>
    <ButtonLink to='/blog'>
      Blog
    </ButtonLink>
  </div>

const styles = (theme) => ({
  container: {
    ...Classes.flexRow,
    marginTop: '25px',
    padding: '15px 0'
  }
})

export default withStyles(styles)(RouteLinks)