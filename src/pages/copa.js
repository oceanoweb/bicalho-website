import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import ProductsList from "../components/ProductsList"
import SEO from "../components/seo"

const Copa = ({ data }) => {
  const productsList = data.allMarkdownRemark.edges.filter(product =>
    product.node.frontmatter.category.includes("copa")
  )

  return (
    <Layout>
      <SEO title="Copa" />
      <ProductsList title="Copa" products={productsList} />
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            price
            description
            image
            category
            subcategory
            discount
          }
        }
      }
    }
  }
`

export default Copa
