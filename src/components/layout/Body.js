import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Classes from 'Styles/classes'
import Colors from 'Styles/colors'
import Spacer from 'Common/Spacer'
import Footer from 'Common/Footer'

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
