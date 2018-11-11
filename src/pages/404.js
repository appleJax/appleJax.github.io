import React from 'react'
import withRoot from '../utils/withRoot'
import Layout from 'Components/Layout'
import NotFoundHeader from 'Components/404/NotFoundHeader'
import NotFoundMessage from 'Components/404/NotFoundMessage'
import RouteLinks from 'Components/404/RouteLinks'

const NotFoundPage = () => (
  <Layout>
    <NotFoundHeader />
    <NotFoundMessage />
    <RouteLinks />
  </Layout>
)

export default withRoot(NotFoundPage)
