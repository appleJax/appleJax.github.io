import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'


function Project({ info, classes }) {
  const Header = ({ header }) =>
    <div className={classes.header}>
      <Typography variant='body2'>
        {header.name}
      </Typography>
      <Typography variant='caption'>
        {header.description}
      </Typography>
    </div>

  const Image = ({ image }) =>
    <img
      src={image.src}
      alt={image.alt}
      className={classes.img}
    />

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
      <Link href={links.live}>
        Live Site
      </Link>
      <Link href={links.github}>
        Github
      </Link>
    </div>

  return (
    <div>
      <Header header={info.header} />
      <Image image={info.image} />
      <LinkOverlay links={info.links} />
    </div>
  ) 
}

const styles = (theme) => ({
  img: {

  },
  link: {

  },
  linkOverlay: {

  },
  header: {

  }
})

export default withStyles(styles)(Project)