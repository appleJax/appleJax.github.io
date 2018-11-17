import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Body from './Body'

import AppleTouchIcon from 'Images/favicon/apple-touch-icon.png'
import Favicon16 from 'Images/favicon/favicon-16x16.png'
import Favicon32 from 'Images/favicon/favicon-32x32.png'
import SafariPinnedTab from 'Images/favicon/safari-pinned-tab.svg'

const Layout = ({ children }) => {
  const Content = ({ site }) => 
    <>
      <Helmet
        title={site.title}
        meta={[
          { property: 'og:title', content: 'Kevin Brewer - Software Engineer' },
          { property: 'og:description', content: `Kevin Brewer's Online Portfolio` },
          { property: 'og:url', content: 'https://applejax.github.io' },
          { property: 'og:image', content: 'https://res.cloudinary.com/kbrew/image/upload/v1539638048/screenshots/githubPages.png' },
          { property: 'og:image:alt', content: 'My Portfolio Screenshot' },
          { property: 'og:image:type', content: 'image/png' },
          { name: 'description', content: site.description },
          { name: 'keywords', content: site.keywords },
          { name: 'msapplication-TileColor', content: '#201407' }
        ]}
        link={[
          {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: AppleTouchIcon,
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: Favicon32,
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: Favicon16,
          },
          {
            rel: 'mask-icon',
            href: SafariPinnedTab,
          },
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
          },
          {
            rel: 'stylesheet',
            href: `https://fonts.googleapis.com/css?family=Carter+One&text=Hi,I'mKevn.brwLog`,
          },
          {
            rel: 'stylesheet',
            href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
            integrity: 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU',
            crossorigin: 'anonymous'
          }
        ]}
      />
      <Body>
        {children}
      </Body>
    </>

  return (
    <StaticQuery
      query={graphql`
        query TitleQuery {
          site {
            siteMetadata {
              title
              description
              keywords
            }
          }
        }`
      }
      render={ (data) => <Content site={data.site.siteMetadata} /> }
    />
  )
}

Layout.propTypes = {
  children: PropTypes.array
}

export default Layout
