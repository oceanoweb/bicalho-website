import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import ProductsList from "../components/ProductsList"
import CapaCategory from "../components/CapaCategory"

const Copa = ({ data }) => {
  const productsList = data.allMarkdownRemark.edges.filter(product =>
    product.node.frontmatter.category.includes("copa")
  )
  const image = data.file.childImageSharp

  return (
    <Layout>
      <SEO title="Copa" />
      <CapaCategory image={image} alt="Capa da categoria copa" />
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
    file(relativePath: { eq: "capa-category/copa.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Copa
