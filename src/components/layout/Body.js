import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles'
import theme from '../../styles/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import Classes from '../../styles/classes'
import Colors from '../../styles/colors'
import Header from '../sections/header'
import Spacer from '../common/Spacer'
import Footer from '../sections/Footer'

const Body = ({ children, classes }) =>
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <div className={classes.container}>
      <Header />
      {children}
      <Spacer />
      <Footer />
    </div>
  </MuiThemeProvider>

const styles = () => ({
  container: {
    ...Classes.flexColumn,
    background: Colors.secondary.bright,
    minHeight: '100vh',
    maxWidth: '100vw'
  }
})

export default withStyles(styles)(Body)
