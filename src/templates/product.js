import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Title from "../components/Title"

const Product = ({ data }) => {
  const { title, price } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <Title title={title} />
      <Title title={price} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        price
        image
        discount
      }
    }
  }
`

export default Product
