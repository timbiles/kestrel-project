import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1> second page</h1>
    
    <Link to="/">Go back to the homepage</Link>
    <Link to="/form">Go to form page</Link>    
  </Layout>
)

export default SecondPage
