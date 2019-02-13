import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Classes from 'Styles/classes'
import Colors from 'Styles/colors'
import Image from 'gatsby-image'
import Typography from '@material-ui/core/Typography'

function Screenshot({ info, classes }) {
  const Header = ({ header }) =>
    <div className={classes.header}>
      <Typography className={classes.head} variant='h6'>
        {header.name}
      </Typography>
      <Typography className={classes.head} variant='body1'>
        {header.description}
      </Typography>
    </div>

  const Img = ({ image }) => {
    return <Image
      fluid={image.fluid}
      alt={image.alt}
      className={classes.img}
    />
  }

  const Link = ({ children, href }) =>
    <a
      className={classes.link}
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>

  const LinkOverlay = ({ links }) =>
    <div className={classes.linkOverlay}>
    { links.live &&
      <Link href={links.live}>
        Live Site
      </Link>
    }
      <Link href={links.github}>
        Github
      </Link>
    </div>

  return (
    <div className={classes.container}>
      <Header header={info.header} />
      <div className={classes.imageContainer}>
        <Img image={info.image} />
        <LinkOverlay links={info.links} />
      </div>
    </div>
  )
}

const styles = (theme) => ({
  container: {
    ...Classes.flexColumn,
    alignItems: 'center',
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)',
    margin: '25px 10px 0',
    maxWidth: '100vw',
    [theme.breakpoints.down('xs')]: {
      margin: '35px 0',
    }
  },
  head: {
    color: theme.palette.secondary.main,
    textAlign: 'center'
  },
  header: {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '10px 10px 0 0',
    maxWidth: '100vw',
    padding: ' 10px 0',
    width: '500px'
  },
  img: {
    maxWidth: '100vw',
    width: '500px'
  },
  link: {
    alignItems: 'center',
    color: Colors.secondary.white,
    display: 'flex',
    font: 'bold 2em Roboto, sans-serif',
    height: '100%',
    justifyContent: 'center',
    textDecoration: 'none',
    transition: '0.2s',
    width: '100%',
    '&:hover, &:focus': {
      background: 'rgba(255, 255, 255, 0.3)',
      boxShadow: `0 0 30px rgba(0, 0, 0, 0.5) inset`,
      textShadow: `0 5px 10px rgba(0, 0, 0, 0.8)`,
      transition: '0.2s'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5em'
    }
  },
  linkOverlay: {
    alignItems: 'center',
    background: 'rgba(15, 8, 14, 0.85)',
    bottom: '0',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    left: '0',
    maxWidth: '100vw',
    opacity: '0',
    position: 'absolute',
    right: '0',
    top: '0',
    width: '100%',
    zIndex: '1',
    transition: '0.35s',
    '&:hover': {
      opacity: '1',
      transition: '0.35s'
    },
    [theme.breakpoints.down('xs')]: {
      height: '40px',
      opacity: '1',
      top: 'calc(100% - 40px)'
    }
  },
  imageContainer: {
    position: 'relative'
  }
})

export default withStyles(styles)(Screenshot)
