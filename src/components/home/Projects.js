import React from 'react'
import { graphql } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'
import Classes from 'Styles/classes'
import SectionTitle from 'Common/SectionTitle'
import ScreenShot from 'Common/ScreenShot'
import { slugify } from 'Utils'

const Projects = ({ classes, projects, screenshots }) => {
  const images = screenshots.edges.reduce(( obj, edge) => ({
    ...obj,
   [edge.node.relativePath.replace(/\..+$/, '')]: edge.node.childImageSharp.fluid
  }), {})

  const projectInfo = projects.map(project => ({
    ...project,
    image: {
      ...project.image,
      fluid: images[slugify(project.header.name)]
    }
  }))

  return (
  <>
    <div id='projects'></div>
    <SectionTitle>Projects</SectionTitle>
    <div className={classes.projectsContainer}>
    {
      projectInfo.map(
        (project, i) => <ScreenShot key={i} info={project} />
      )
    }
    </div>
  </>
  )
}

const styles = (theme) => ({
  projectsContainer: {
    ...Classes.flexRow,
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%'
  }
})

export const query = graphql`
  fragment ProjectsFragment on section_2 {
    projects {
      header {
        name
        description
      }
      image {
        alt
      }
      links {
        live
        github
      }
    }
  }
`

export default withStyles(styles)(Projects)