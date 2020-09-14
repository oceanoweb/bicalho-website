import React from "react"
import PropTypes from "prop-types"

import Product from "../Product"
import Title from "../Title"

import * as S from "./styled"

const ProductsSection = ({ title, products }) => (
  <S.ProductsSectionWrapper>
    <Title title={title} />
    <S.ProductsWrapper>
      {products.map((product, index) => (
        <Product key={index} product={product.node} />
      ))}
    </S.ProductsWrapper>
  </S.ProductsSectionWrapper>
)

ProductsSection.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.object),
}

export default ProductsSection
