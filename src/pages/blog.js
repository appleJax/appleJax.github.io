import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Layout from '../components/layout'

const styles = (theme) => ({

})

const BlogPage = ({ classes }) =>
  <Layout>
    <p>
      My Blog
    </p>
  </Layout>

export default withStyles(styles)(BlogPage)