import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Classes from 'Styles/classes'
import Colors from 'Styles/colors'
import PageNav from './PageNav'
import SocialNav from 'Common/SocialNav'

class Nav extends Component {
  constructor() {
    super()

    this.state = {
      activeTab: 'home',
      openSourceOffset: 1230,
      projectsOffset: 637,
      scrollOffset: 0
    }

    this.handleResize = this.handleResize.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
    this.handleResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleResize() {
    const WIDTH = window.innerWidth
    
    const openSourceOffset = this.getOffset('open-source')
    const projectsOffset = this.getOffset('projects')
    let scrollOffset = 0

    if (WIDTH < 600) {
      scrollOffset = 98
    }

    this.setState({
      openSourceOffset,
      projectsOffset,
      scrollOffset
    })
  }

  getOffset(id) {
    return window.document.getElementById(id).offsetTop - this.state.scrollOffset - 5
  }


  handleScroll() {
    const xPosition = window.document.scrollingElement.scrollTop

    if (xPosition > this.state.openSourceOffset) {
      this.setState({ activeTab: 'open-source' })
    } else if (xPosition > this.state.projectsOffset) {
      this.setState({ activeTab: 'projects' })
    } else {
      this.setState({ activeTab: 'home' })
    }
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
        <PageNav activeTab={this.state.activeTab} scrollOffset={this.state.scrollOffset} />
        <SocialNav />
      </div>
    )
  }
}

const styles = (theme) => ({
  container: {
    ...Classes.flexRow,
    flexWrap: 'wrap',
    background: Colors.primary.night,
    color: Colors.primary.main,
    padding: '0 10px',
    position: 'fixed',
    width: '100vw',
    zIndex: '2'
  }
})

export default withStyles(styles)(Nav)
