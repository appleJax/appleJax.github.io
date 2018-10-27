import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Classes from '../../styles/classes'
import Colors from '../../styles/colors'
import Spacer from '../common/Spacer'
import Footer from '../common/Footer'

const Body = ({ children, classes }) => (
  <div className={classes.container}>
    {children}
    <Spacer />
    <Footer />
  </div>
)

const styles = () => ({
  container: {
    ...Classes.flexColumn,
    background: Colors.secondary.bright,
    minHeight: '100vh',
    maxWidth: '100vw',
    overflowX: 'hidden'
  }
})

export default withStyles(styles)(Body)
