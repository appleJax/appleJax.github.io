import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Classes from 'Styles/classes'
import Colors from 'Styles/colors'

const HandWave = () =>
  <span role='img' aria-label='hand-wave'>👋</span>

const AboutMe = ({ classes }) =>
  <div className={classes.background}>
    <div className={classes.container}>
      <div className={classes.intro}>
         <HandWave /> Hi, I'm Kevin.
      </div>
      <div className={classes.descriptionBg}>
        <div className={classes.description}>
          I write software for the most widely available platform in history - the web!
        </div>
        <div className={classes.description}>
          I primarily utilize the React and Node ecosystems, and I'm always trying out new languages and tools to improve the quality of my work!
        </div>
      </div>
      <a
        className={classes.hireMe}
        href='mailto:kevNbrewer@gmail.com?subject=Come Work For Us!'
        target='_blank'
        rel='noreferrer noopener'
      >
        <i className={classNames('fas fa-keyboard', classes.keyboard)}/> Hire Me
      </a>
    </div>
  </div>

const styles = (theme) => ({
  background: {
    ...Classes.flexRow,
    background: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    padding: '30px 0',
    width: '100vw',
    [theme.breakpoints.down('sm')]: {
      padding: '0'
    }
  },
  container: {
    ...Classes.flexColumn,
    margin: '20px 0',
    maxWidth: '500px'
  },
  description: {
    color: theme.palette.secondary.main,
    font: '1.3em Roboto',
    margin: '10px 0'
  },
  descriptionBg: {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '5px',
    padding: '10px 20px'
  },
  hireMe: {
    background: theme.palette.secondary.light,
    borderRadius: '10px',
    boxShadow: '2px 2px 3px rgba(0, 0, 0, 0.3)',
    color: 'rgba(255, 255, 255, 0.6)',
    font: '1.5em Roboto, sans-serif',
    marginTop: '25px',
    padding: '10px 20px',
    textDecoration: 'none',
    textShadow: `1px 1px ${Colors.secondary.main}`,
    '&:hover, &:focus': {
      opacity: '0.9'
    }
  },
  intro: {
    color: theme.palette.secondary.main,
    font: 'bold 4em Carter One, cursive',
    textAlign: 'center',
    textShadow: `2px 2px 4px ${Colors.secondary.highlight}`
  },
  keyboard: {
    marginRight: '10px'
  }
})

export default withStyles(styles)(AboutMe)
