import React from "react"

import * as S from "./styled"

const menuLinks = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Sala",
    url: "/sala/",
  },
  {
    label: "Cozinha",
    url: "/cozinha/",
  },
  {
    label: "Quarto",
    url: "/quarto/",
  },
  {
    label: "Copa",
    url: "/copa/",
  },
]

const Menu = () => (
  <S.MenuWrapped>
    {menuLinks.map(menuLink => {
      const { url, label } = menuLink
      return (
        <S.MenuLinks key={label} to={url} activeClassName="active">
          {label}
        </S.MenuLinks>
      )
    })}
  </S.MenuWrapped>
)

export default Menu
