import React from 'react'
import { graphql } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'
import Classes from 'Styles/classes'
import SectionTitle from 'Common/SectionTitle'
import ScreenShot from 'Common/ScreenShot'
import { slugify } from 'Utils'

const OpenSource = ({ classes, repos, screenshots }) => {
  const images = screenshots.edges.reduce(
    (obj, edge) => ({
      ...obj,
      [edge.node.relativePath.replace(/\..+$/, '')]: edge.node.childImageSharp
        .fluid,
    }),
    {}
  )

  const repoInfo = repos.map(repo => ({
    ...repo,
    image: {
      ...repo.image,
      fluid: images[slugify(repo.header.name)],
    },
  }))

  return (
    <>
      <div id="open-source" />
      <SectionTitle>Open Source</SectionTitle>
      <div className={classes.osContainer}>
        {repoInfo.map((repo, i) => (
          <ScreenShot key={i} info={repo} />
        ))}
      </div>
    </>
  )
}

const styles = () => ({
  osContainer: {
    ...Classes.flexRow,
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
})

export const query = graphql`
  fragment OpenSourceFragment on SiteSiteMetadataSection {
    openSource {
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

export default withStyles(styles)(OpenSource)
