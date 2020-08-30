import React from "react"
import PropTypes from "prop-types"

import Product from "../Product"

import * as S from "./styled"

const ProductsSection = ({ title }) => {
  const products = [
    {
      title: "Loren Ipsun",
      price: "R$ 99,90",
      image: "htttp://teste.com.br",
      discount: "10%",
    },
    {
      title: "Loren Ipsun",
      price: "R$ 99,90",
      image: "htttp://teste.com.br",
    },
    {
      title: "Loren Ipsun",
      price: "R$ 99,90",
      image: "htttp://teste.com.br",
      discount: "10%",
    },
    {
      title: "Loren Ipsun",
      price: "R$ 99,90",
      image: "htttp://teste.com.br",
    },
  ]

  return (
    <S.ProductsSectionWrapper>
      <S.ProductsSectionTitle>{title}</S.ProductsSectionTitle>
      <S.ProductsWrapper>
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </S.ProductsWrapper>
    </S.ProductsSectionWrapper>
  )
}

ProductsSection.propTypes = {
  title: PropTypes.string.isRequired,
}

export default ProductsSection
