import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Title from "../components/Title"
import Layout from "../components/Layout"
import ProductsList from "../components/ProductsList"
import CapaCategory from "../components/CapaCategory"

const Cozinha = ({ data }) => {
  const productsList = data.allMarkdownRemark.edges.filter(product =>
    product.node.frontmatter.category.includes("cozinha")
  )
  const image = data.file.childImageSharp

  return (
    <Layout>
      <SEO title="Cozinha" />
      <CapaCategory image={image} alt="Capa da categoria cozinha" />
      <Title title="Cozinha" />
      {productsList.length > 0 ? (
        <ProductsList products={productsList} />
      ) : (
        <p>Nenhum produto nessa lista</p>
      )}
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
          fields {
            slug
          }
        }
      }
    }
    file(relativePath: { eq: "capa-category/cozinha.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Cozinha
