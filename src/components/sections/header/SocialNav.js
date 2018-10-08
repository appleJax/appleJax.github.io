import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Classes from '../../../styles/classes'
import SocialLink from '../../common/SocialLink'

const SocialNav = ({ classes }) =>
  <div className={classes.container}>
    <SocialLink
      to='https://github.com/appleJax'
      className='fa fa-2x fa-github'
    />
    <SocialLink
      to='https://www.linkedin.com/in/kevin-brewer-profile'
      className='fa fa-2x fa-linkedin'
    />
    <SocialLink
      to='mailto:kevnbrewer@gmail.com'
      className='fa fa-2x fa-envelope'
    />
  </div>

const styles = (theme) => ({
  container: {
    ...Classes.flexRow
  }
})

export default withStyles(styles)(SocialNav)