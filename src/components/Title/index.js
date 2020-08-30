import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const Title = ({ title }) => {
  return <S.Title>{title}</S.Title>
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Title
