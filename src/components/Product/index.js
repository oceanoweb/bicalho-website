import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const Product = ({ product }) => {
  const { title, price, image, discount } = product

  return (
    <S.ProductWrapper>
      {discount && (
        <>
          <S.ProductDiscount>{`${discount} OFF`}</S.ProductDiscount>
          {/* <S.ProductDiscountTriangle /> */}
        </>
      )}
      <S.ProductImage href="https://picsum.photos/130/100"></S.ProductImage>
      <S.ProductTitle>{title}</S.ProductTitle>
      <S.ProductPrice>{price}</S.ProductPrice>
      <S.ProductButton
        href="https://wa.me/5511000000000?text=Olá,%20meu%20amigo!"
        target="_blank"
      >
        <S.WhatsappIcon />
        <S.ProductButtonLabel>COMPRAR</S.ProductButtonLabel>
      </S.ProductButton>
    </S.ProductWrapper>
  )
}

Product.defaultProps = {
  product: {
    discount: null,
  },
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    discount: PropTypes.string,
  }),
}

export default Product
