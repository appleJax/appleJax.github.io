import React from 'react'
import withRoot from 'Utils/withRoot'
import Layout from 'Components/Layout'
import BlogHeader from 'Components/blog/BlogHeader'
import UnderConstruction from 'Components/blog/UnderConstruction'
import ButtonLink from 'Components/common/ButtonLink'

const BlogPage = () =>
  <Layout>
    <BlogHeader />
    <UnderConstruction />
    <ButtonLink to='/'>
      Home
    </ButtonLink>
  </Layout>

export default withRoot(BlogPage)
