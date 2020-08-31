import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import ProductsList from "../components/ProductsList"
import SEO from "../components/seo"

const Sala = ({ data }) => {
  const productsList = data.allMarkdownRemark.edges.filter(product =>
    product.node.frontmatter.category.includes("sala")
  )

  return (
    <Layout>
      <SEO title="Sala" />
      <ProductsList title="Sala" products={productsList} />
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

export default Sala
