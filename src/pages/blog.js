import React from 'react'
import Layout from '../components/Layout'
import BlogHeader from '../components/blog/BlogHeader'
import UnderConstruction from '../components/blog/UnderConstruction'
import ButtonLink from '../components/common/ButtonLink'

const BlogPage = () =>
  <Layout classPrefix='b'>
    <BlogHeader />
    <UnderConstruction />
    <ButtonLink to='/'>
      Home
    </ButtonLink>
  </Layout>

export default BlogPage
