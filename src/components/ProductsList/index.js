import React from "react"
import PropTypes from "prop-types"

import Product from "../Product"
import Title from "../Title"

import * as S from "./styled"

const ProductsList = ({ title, products }) => (
  <S.ProductsListWrapper>
    <Title title={title} />
    <S.ProductsWrapper>
      {products.map((product, index) => (
        <Product key={index} product={product.node.frontmatter} />
      ))}
    </S.ProductsWrapper>
  </S.ProductsListWrapper>
)

ProductsList.propTypes = {
  title: PropTypes.string.isRequired,
}

export default ProductsList
