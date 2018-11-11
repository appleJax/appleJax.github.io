import React from 'react'
import { graphql } from 'gatsby'
import withRoot from 'Utils/withRoot'
import Layout from 'Components/Layout'
import Header from 'Components/home/Header'
import AboutMe from 'Components/home/AboutMe'
import Projects from 'Components/home/Projects'
import OpenSource from 'Components/home/OpenSource'

const IndexPage = ({
  data: {
    site: {
      siteMetadata: {
        section
      }
    },
    projectImages,
    openSourceImages
  }
}) => (
  <>
    <div id='top' />
    <Layout>
      <Header />
      <AboutMe />
      <Projects screenshots={projectImages} projects={section.projects} />
      <OpenSource screenshots={openSourceImages} repos={section.openSource} />
    </Layout>
  </>
)

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        section {
          ...ProjectsFragment
          ...OpenSourceFragment
        }
      }
    }
    projectImages: allFile(filter: { sourceInstanceName: { eq: "projectImages" } }) {
      edges {
        node {
          absolutePath
          relativePath
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    openSourceImages: allFile(filter: { sourceInstanceName: { eq: "openSourceImages" } }) {
      edges {
        node {
          absolutePath
          relativePath
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default withRoot(IndexPage)
