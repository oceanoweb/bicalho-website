import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Slider from "../components/Slider"
import ProductsSection from "../components/ProductsSection"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const productsOfertasList = data.allMarkdownRemark.edges.filter(product =>
    product.node.frontmatter.category.includes("ofertas")
  )
  const productsSalaList = data.allMarkdownRemark.edges.filter(product =>
    product.node.frontmatter.category.includes("sala")
  )
  const productsCozinhaList = data.allMarkdownRemark.edges.filter(product =>
    product.node.frontmatter.category.includes("cozinha")
  )
  const productsQuartoList = data.allMarkdownRemark.edges.filter(product =>
    product.node.frontmatter.category.includes("quarto")
  )
  const productsCopaList = data.allMarkdownRemark.edges.filter(product =>
    product.node.frontmatter.category.includes("copa")
  )

  return (
    <Layout>
      <SEO title="Home" />
      <Slider />
      {productsOfertasList.length > 0 && (
        <ProductsSection
          title="Ofertas especiais"
          products={productsOfertasList}
        />
      )}
      {productsSalaList.length > 0 && (
        <ProductsSection title="Sala" products={productsSalaList} />
      )}
      {productsCozinhaList.length > 0 && (
        <ProductsSection title="Cozinha" products={productsCozinhaList} />
      )}
      {productsQuartoList.length > 0 && (
        <ProductsSection title="Quarto" products={productsQuartoList} />
      )}
      {productsCopaList.length > 0 && (
        <ProductsSection title="Copa" products={productsCopaList} />
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
  }
`

export default IndexPage
