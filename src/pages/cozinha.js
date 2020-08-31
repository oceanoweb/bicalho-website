import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import ProductsList from "../components/ProductsList"
import SEO from "../components/seo"

const Cozinha = ({ data }) => {
  const productsList = data.allMarkdownRemark.edges.filter(product =>
    product.node.frontmatter.category.includes("cozinha")
  )

  return (
    <Layout>
      <SEO title="Cozinha" />
      <ProductsList title="Cozinha" products={productsList} />
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

export default Cozinha
