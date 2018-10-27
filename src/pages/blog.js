import React from 'react'
import withRoot from '../utils/withRoot'
import Layout from '../components/Layout'
import BlogHeader from '../components/blog/BlogHeader'
import UnderConstruction from '../components/blog/UnderConstruction'
import ButtonLink from '../components/common/ButtonLink'

const BlogPage = () =>
  <Layout>
    <BlogHeader />
    <UnderConstruction />
    <ButtonLink to='/'>
      Home
    </ButtonLink>
  </Layout>

export default withRoot(BlogPage)
