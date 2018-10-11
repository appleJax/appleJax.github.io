import React from 'react'
import { graphql } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'
import Classes from '../../styles/classes'
import SectionTitle from '../common/SectionTitle'
import ScreenShot from '../common/ScreenShot'
import { slugify } from '../../utils'

const OpenSource = ({ classes, repos, screenshots }) => {
  const images = screenshots.edges.reduce(( obj, edge) => ({
    ...obj,
   [edge.node.relativePath.replace(/\..+$/, '')]: edge.node.childImageSharp.fluid
  }), {})

  const repoInfo = repos.map(repo => ({
    ...repo,
    image: {
      ...repo.image,
      fluid: images[slugify(repo.header.name)]
    }
  }))

  return (
  <>
    <div id='open-source'></div>
    <SectionTitle>Open Source</SectionTitle>
    <div className={classes.osContainer}>
    {
      repoInfo.map(
        (repo, i) => <ScreenShot key={i} info={repo} />
      )
    }
    </div>
  </>
  )
}

const styles = (theme) => ({
  osContainer: {
    ...Classes.flexRow,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%'
  }
})

export const query = graphql`
  fragment OpenSourceFragment on section_2 {
    openSource {
      header {
        name
        description
      }
      image {
        alt
      }
      links {
        github
      }
    }
  }
`

export default withStyles(styles)(OpenSource)
