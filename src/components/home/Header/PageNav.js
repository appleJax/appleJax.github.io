import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import NavLink from './NavLink'
import Classes from '../../../styles/classes'

const PageNav = ({ activeTab, classes, scrollOffset }) => {
  const Link = ({ active, icon, scrollOffset, text, to }) =>
    <NavLink
      active={active}
      scrollOffset={scrollOffset}
      to={to}
      pageLink={to === '/blog'}
    >
      <span className={classes.text}>
        {text}
      </span>
      <span className={classes.icon}>
        <i className={`fas fa-${icon}`} />
      </span>
    </NavLink>

  return (
    <div className={classes.container}>
      <Link
        active={activeTab === 'home'}
        icon='home'
        text='home'
        to='top'
      />
      <Link
        active={activeTab === 'projects'}
        icon='code'
        scrollOffset={scrollOffset}
        text='projects'
        to='projects'
      />
      <Link
        active={activeTab === 'open-source'}
        icon='code-branch'
        scrollOffset={scrollOffset}
        text='open source'
        to='open-source'
      />
      <Link
        icon='magic'
        text='blog'
        to='/blog'
      />
    </div>
  )
}

const styles = (theme) => ({
  container: {
    ...Classes.flexRow,
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  icon: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'inline'
    }
  },
  text: {
    textTransform: 'uppercase',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  }
})

export default withStyles(styles)(PageNav)