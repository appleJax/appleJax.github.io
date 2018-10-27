import React from 'react'
import withRoot from '../utils/withRoot'
import Layout from '../components/Layout'
import NotFoundHeader from '../components/404/NotFoundHeader'
import NotFoundMessage from '../components/404/NotFoundMessage'
import RouteLinks from '../components/404/RouteLinks'

const NotFoundPage = () => (
  <Layout>
    <NotFoundHeader />
    <NotFoundMessage />
    <RouteLinks />
  </Layout>
)

export default withRoot(NotFoundPage)
