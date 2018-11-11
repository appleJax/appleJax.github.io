import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Classes from 'Styles/classes'
import SocialLink from './SocialLink'

const SocialNav = ({ classes }) =>
  <div className={classes.container}>
    <SocialLink
      to='https://github.com/appleJax'
      className='fab fa-2x fa-github'
    />
    <SocialLink
      to='https://www.linkedin.com/in/kevin-brewer-profile'
      className='fab fa-2x fa-linkedin'
    />
    <SocialLink
      to='mailto:kevnbrewer@gmail.com'
      className='fas fa-2x fa-envelope'
    />
  </div>

const styles = (theme) => ({
  container: {
    ...Classes.flexRow,
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      margin: '5px 0 10px',
      width: '100%'
    }
  }
})

export default withStyles(styles)(SocialNav)