import React, { useState } from "react"

import ContactUS from "../ContactUS"

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

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
      <S.MenuWrapped
        isMenuOpen={isMenuOpen}
        className={isMenuOpen ? "open-menu" : ""}
      >
        {menuLinks.map(menuLink => {
          const { url, label } = menuLink
          return (
            <S.MenuLinks key={label} to={url} activeClassName="active">
              {label}
            </S.MenuLinks>
          )
        })}
        <ContactUS show={false} isMenuOpen={isMenuOpen} />
        <S.CloseOutlineIcon onClick={openMenu} />
      </S.MenuWrapped>
      <S.MenuIcon onClick={openMenu} />
    </>
  )
}

export default Menu
