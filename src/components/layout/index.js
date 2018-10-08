import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Body from './Body'

const Content = ({ children, site }) => 
  <>
    <Helmet
      title={site.title}
      meta={[
        { name: 'description', content: site.description },
        { name: 'keywords', content: site.keywords },
      ]}
      link={[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500'
        },
        {
         rel: 'stylesheet',
         href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'
        },
        {
          rel: 'stylesheet',
          href: `https://fonts.googleapis.com/css?family=Carter+One&text=Hi,I'mKevn.`
        }
      ]}
    />
    <Body>
      {children}
    </Body>
  </>

const Layout = ({ children }) =>
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
    render={(data) =>
      <Content
        site={data.site.siteMetadata}
        children={children}
      />
    }
  />

Layout.propTypes = {
  children: PropTypes.array
}

export default Layout
