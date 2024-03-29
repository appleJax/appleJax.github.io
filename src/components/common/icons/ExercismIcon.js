import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const ExercismIcon = ({ classes }) =>
  <svg
    className={classes.icon}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 384 384'
    height='32px'
  >
    <g
      id='logo-shape'
      fill='none'
      fillRule='evenodd'
    >
      <circle
        id='Oval'
        fill='transparent'
        cx='192'
        cy='192'
        r='192'
      />
      <path
        id='shape'
        style={{transition: 'all 200ms ease-in-out'}}
        d='M244.1 101.5s3.3 33.8-18.3 52.1c-8.7-5.5-19.6-8.6-32.5-8.6-11.9 0-23.6 3.4-33.7 9.7-23.1-18.1-19.6-53.2-19.6-53.2-25.6 49.9 1.3 69.4 1.9 69.9-7.1 10.2-11.5 23.1-11.5 38.2 0 40.5 29.7 64.4 66.7 64.4 18.9 0 35-6.3 47.8-14.3l-8.8-15.8c-11.1 6.5-22.4 10.6-35.7 10.6-24.7 0-42.8-14.3-44.3-38.5h92.6c.5-3 1.3-7.8 1.3-12.8 0-12.1-2.6-22.9-7.6-31.8 2.4-1.9 26.3-21.9 1.7-69.9zm-88.3 97.3c3.3-21.9 19.6-34.2 38-34.2 21.1 0 33 12.3 33 34.2h-71zM192 384C86.1 384 0 297.9 0 192S86.1 0 192 0s192 86.1 192 192-86.1 192-192 192zm0-359.1c-92.2 0-167.1 75-167.1 167.1 0 92.2 75 167.1 167.1 167.1 92.2 0 167.1-75 167.1-167.1 0-92.2-74.9-167.1-167.1-167.1z'
      />
    </g>
  </svg>

const styles = (theme) => ({
  icon: {
    '& path': {
      fill: theme.palette.primary.main,
    }
  }
})

export default withStyles(styles)(ExercismIcon)