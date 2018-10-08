import React from 'react'
import { graphql } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'
import SectionTitle from '../../common/SectionTitle'
import Project from './Project'

const Projects = ({ classes, projects }) =>
  <>
    <SectionTitle>Projects</SectionTitle>
    {
      projects.map(
        (project, i) => <Project key={i} info={project} />
      )
    }
  </>

const styles = (theme) => ({

})

export const query = graphql`
  fragment ProjectsFragment on section_2 {
    projects {
      header {
        name
        description
      }
      image {
        src
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