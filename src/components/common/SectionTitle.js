import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const SectionTitle = ({ classes, children }) =>
  <Typography variant='title'>
    {children}
  </Typography>

const styles = (theme) => ({

})

export default withStyles(styles)(SectionTitle)
