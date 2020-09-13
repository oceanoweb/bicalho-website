import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Logo = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 190) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <S.LogoLink to="/">
      <S.LogoWrapped fixed={logo.childImageSharp.fixed} alt="Bicalho logo" />
    </S.LogoLink>
  )
}

export default Logo
