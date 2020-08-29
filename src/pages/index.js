import React from "react"

import Layout from "../components/Layout"
import Slider from "../components/Slider"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slider />
  </Layout>
)

export default IndexPage
