import React from "react"

import SEO from "../components/seo"
import Empty from "../components/Empty"
import Layout from "../components/Layout"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Empty text="Página não encontrada :(" />
  </Layout>
)

export default NotFoundPage
