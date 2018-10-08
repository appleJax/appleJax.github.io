import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import AboutMe from '../components/sections/AboutMe'
import Projects from '../components/sections/projects'
import OpenSource from '../components/sections/OpenSource'
import More from '../components/sections/More'

const IndexPage = ({
  data: {
    site: {
      siteMetadata: {
        section
      }
    }
  }
}) => (
  <Layout>
    <AboutMe />
    <Projects projects={section.projects} />
    <OpenSource />
    <More />
  </Layout>
)

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        section {
          ...ProjectsFragment
        }
      }
    }
  }
`

export default IndexPage
