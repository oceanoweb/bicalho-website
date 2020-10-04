import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Title from "../components/Title"
import Layout from "../components/Layout"
import ProductsList from "../components/ProductsList"
import CapaCategory from "../components/CapaCategory"

const Quarto = ({ data }) => {
  const productsList = data.allMarkdownRemark.edges.filter(product =>
    product.node.frontmatter.category.includes("quarto")
  )
  const image = data.file.childImageSharp

  return (
    <Layout>
      <SEO title="Quarto" />
      <CapaCategory image={image} alt="Capa da categoria quarto" />
      <Title title="Quarto" />
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
    file(relativePath: { eq: "capa-category/quarto.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Quarto
