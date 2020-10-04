import React from "react"
import PropTypes from "prop-types"

import Product from "../Product"

import * as S from "./styled"

const ProductsList = ({ products }) => (
  <S.ProductsListWrapper>
    <S.ProductsWrapper>
      {products.map((product, index) => (
        <Product key={index} product={product.node} />
      ))}
    </S.ProductsWrapper>
  </S.ProductsListWrapper>
)

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
}

export default ProductsList
