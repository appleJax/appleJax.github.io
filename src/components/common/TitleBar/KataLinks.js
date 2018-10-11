import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Classes from '../../../styles/classes'
import Colors from '../../../styles/colors'
import SocialLink from '../SocialLink'
import CodeWarsIcon from '../icons/CodeWarsIcon'
import HackerRankIcon from '../icons/HackerRankIcon'
import ExercismIcon from '../icons/ExercismIcon'
import Typography from '@material-ui/core/Typography'

const KataLinks = ({ classes }) =>
  <div className={classes.outerContainer}>
    <div className={classes.innerContainer}>
      <SocialLink
        to='https://codepen.io/appleJax'
        title
      >
        <i className='fab fa-2x fa-codepen' />
      </SocialLink>
      <SocialLink
        to='https://www.codewars.com/users/appleJax'
        title
      >
        <CodeWarsIcon />
      </SocialLink>
      <SocialLink
        to='https://www.hackerrank.com/kevinbrewer04'
        title
      >
        <HackerRankIcon />
      </SocialLink>
      <SocialLink
        to='https://exercism.io/profiles/appleJax'
        title
      >
        <ExercismIcon />
      </SocialLink>
    </div>
    <Typography
      className={classes.description}
      variant='body1'
    >
      CODE SAMPLES
    </Typography>
  </div>

const styles = (theme) => ({
  description: {
    border: '2px solid rgba(0, 0, 0, 0.3)',
    borderLeft: 'none',
    borderRight: 'none',
    color: Colors.primary.night,
    fontSize: '14px',
    fontWeight: 'bold',
    marginTop: '10px',
    padding: '5px',
    opacity: '0.8',
    textAlign: 'center',
    textShadow: '1px 1px rgba(255, 255, 255, 0.1)'
  },
  innerContainer: {
    ...Classes.flexRow,
    justifyContent: 'center'
  },
  outerContainer: {
    ...Classes.flexColumn,
    alignItems: 'center',
    width: '33%',
    [theme.breakpoints.down('sm')]: {
      width: '50%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  }
})

export default withStyles(styles)(KataLinks)