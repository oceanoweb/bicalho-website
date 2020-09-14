import React from "react"

import * as S from "./styled"

const CapaCategory = ({ image, alt }) => {
  return <S.CapaCategoryWrapped fluid={image.fluid} alt={alt} />
}

export default CapaCategory
