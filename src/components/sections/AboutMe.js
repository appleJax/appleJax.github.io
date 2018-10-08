import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Classes from '../../styles/classes'
import Colors from '../../styles/colors'

const AboutMe = ({ classes }) =>
  <div className={classes.background}>
    <div className={classes.container}>
      <div className={classes.intro}>
        Hi, I'm Kevin.
      </div>
      <div className={classes.descriptionBg}>
        <div className={classes.description}>
          I write software for the most widely available platform in history - the web!
        </div>
        <div className={classes.description}>
          I primarily utilize the React and Node ecosystems, and I'm always trying out new languages and tools to improve the quality of my work!
        </div>
      </div>
    </div>
  </div>

const styles = (theme) => ({
  background: {
    ...Classes.flexRow,
    background: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    padding: '30px 0',
    width: '100vw'
  },
  container: {
    ...Classes.flexColumn,
    margin: '20px 0',
    maxWidth: '500px'
  },
  intro: {
    color: theme.palette.secondary.main,
    font: 'bold 4em Carter One, cursive',
    textShadow: `2px 2px 4px ${Colors.secondary.highlight}`
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
  }
})

export default withStyles(styles)(AboutMe)
