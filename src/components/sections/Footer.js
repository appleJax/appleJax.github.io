import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Colors from '../../styles/colors'
import Classes from '../../styles/classes'
import SocialLink from '../common/SocialLink'

const Footer = ({ classes }) =>
  <div className={classes.container}>
    <p className={classes.copyright}>
      © 2018 - Kevin Brewer -
    </p>
    <SocialLink
      to='https://github.com/appleJax'
      className='fa fa-github'
      footer
    />
    <SocialLink
      to='https://www.linkedin.com/in/kevin-brewer-profile'
      className='fa fa-linkedin'
      footer
    />
    <SocialLink
      to='mailto:kevnbrewer@gmail.com'
      className='fa fa-envelope'
      footer
    />
  </div>

const styles = (theme) => ({
  container: {
    ...Classes.flexRow,
    justifyContent: 'center',
    color: '#888',
    background: Colors.secondary.night,
    height: '60px',
    width: '100vw'
  },
  copyright: {
    color: Colors.darkGrey,
    fontFamily: 'Roboto',
    fontSize: '0.8em'
  }
})

export default withStyles(styles)(Footer)