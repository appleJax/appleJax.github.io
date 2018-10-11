import React from 'react'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Colors from '../../styles/colors'

const SocialLink = ({ classes, title, footer, className = '', children, to }) =>
  <a
    className={classNames(
      classes.link,
      ...className.split(' '),
      { [classes.grey]: footer,
        [classes.title]: title
      },
    )}
    target='_blank'
    rel='noopener noreferrer'
    href={to}
  >
    {children}
  </a>

const styles = (theme) => ({
  link: {
    color: theme.palette.primary.main,
    padding: '0 8px',
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary.light,
      '& svg, g, path': {
        fill: theme.palette.primary.light
      }
    }
  },
  grey: {
    color: Colors.darkGrey,
    '&:hover': {
      color: Colors.lightGrey
    }
  },
  title: {
    alignItems: 'center',
    background: Colors.primary.night,
    borderRadius: '50%',
    boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
    opacity: '0.9',
    display: 'flex',
    height: '55px',
    justifyContent: 'center',
    margin: '0 5px',
    width: '55px'
  }
})

export default withStyles(styles)(SocialLink)