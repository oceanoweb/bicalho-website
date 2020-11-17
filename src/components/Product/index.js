import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const Product = ({ product }) => {
  const { frontmatter, fields } = product
  const { title, price, image, discount } = frontmatter

  return (
    <S.ProductWrapper>
      <S.Product to={fields.slug}>
        {discount && <S.ProductDiscount>{`${discount} OFF`}</S.ProductDiscount>}
        <S.ProductImage src={image} />
        <S.ProductTitle>{title}</S.ProductTitle>
        <S.ProductPrice>{price}</S.ProductPrice>
      </S.Product>
      <S.ProductButton
        href={`https://wa.me/553186846705?text=Olá, gostei do produto ${title}`}
        target="_blank"
      >
        <S.WhatsappIcon />
        <S.ProductButtonLabel>Comprar</S.ProductButtonLabel>
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
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      discount: PropTypes.string,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
}

export default Product
