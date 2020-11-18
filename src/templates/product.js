import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import ProductsSection from "../components/ProductsSection"

import * as S from "./styled"

const Product = ({ data }) => {
  const {
    title,
    price,
    description,
    installments,
    installmentsPrice,
    image,
  } = data.markdownRemark.frontmatter
  const productsOfertasList = data.allMarkdownRemark.edges.filter(product =>
    product.node.frontmatter.category.includes("ofertas")
  )

  return (
    <Layout>
      <S.ProductSectionWrapper>
        <S.ProductCapa
          fluid={data.bannerOffer.childImageSharp.fluid}
          alt="Banner ofertas"
        />
        <S.ProductWrapper>
          <S.ProductDetailsWrapper>
            <S.ProductDetails>
              <S.ProductTitle>{title}</S.ProductTitle>
              {description.map((descrip, index) => (
                <S.ProductDescription key={index}>
                  {descrip}
                </S.ProductDescription>
              ))}
              <S.ProductLabel>A partir de</S.ProductLabel>
              <S.ProductPrice>{price}</S.ProductPrice>
              <S.ProductPart>
                {`Até ${installments}x de ${installmentsPrice}`}
              </S.ProductPart>
            </S.ProductDetails>
            <S.ProductButton
              href={`https://wa.me/553186846705?text=Olá, gostei do produto ${title}`}
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
        description
        installments
        installmentsPrice
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
    bannerOffer: file(relativePath: { eq: "banner-offer.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Product
