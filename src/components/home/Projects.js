import React from 'react'
import { graphql } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'
import Classes from '../../styles/classes'
import SectionTitle from '../common/SectionTitle'
import ScreenShot from '../common/ScreenShot'
import { slugify } from '../../utils'

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
    justifyContent: 'space-around',
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