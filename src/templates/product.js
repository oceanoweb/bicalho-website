import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import ProductsSection from "../components/ProductsSection"

import * as S from "./styled"

const Product = ({ data }) => {
  const { title, price, image } = data.markdownRemark.frontmatter
  const productsOfertasList = data.allMarkdownRemark.edges.filter(product =>
    product.node.frontmatter.category.includes("ofertas")
  )

  return (
    <Layout>
      <S.ProductSectionWrapper>
        <S.ProductCapa />
        <S.ProductWrapper>
          <S.ProductDetailsWrapper>
            <S.ProductDetails>
              <S.ProductTitle>{title}</S.ProductTitle>
              <S.ProductCode>Código XXXXXXXX</S.ProductCode>
              <S.ProductLabel>Tamanhos disponíveis: </S.ProductLabel>
              <S.ProductSizeWrapper>
                <S.ProductSize>2,30</S.ProductSize>
                <S.ProductSize>2,50</S.ProductSize>
                <S.ProductSize>2,70</S.ProductSize>
              </S.ProductSizeWrapper>
              <S.ProductLabel>A partir de</S.ProductLabel>
              <S.ProductPrice>{price}</S.ProductPrice>
              <S.ProductPart>Até 00x de 0000,00 sem juros</S.ProductPart>
            </S.ProductDetails>
            <S.ProductButton
              href={`https://wa.me/5511000000000?text=Olá, gostei do produto ${title}`}
              target="_blank"
            >
              <S.WhatsappIcon />
              <S.ProductButtonLabel>Comprar</S.ProductButtonLabel>
            </S.ProductButton>
          </S.ProductDetailsWrapper>
          <S.ProducImaageWrapper>
            <S.ProductImage src={image} />
          </S.ProducImaageWrapper>
        </S.ProductWrapper>
      </S.ProductSectionWrapper>
      <ProductsSection title="Confira também" products={productsOfertasList} />
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

export default Product
