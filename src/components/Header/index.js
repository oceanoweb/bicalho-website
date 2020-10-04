import React from "react"

import Menu from "../Menu"
import Logo from "../Logo"
import ContactUS from "../ContactUS"

import * as S from "./styled"

const Header = () => (
  <S.HeaderWrapped>
    <Logo />
    <Menu />
    <ContactUS />
  </S.HeaderWrapped>
)

export default Header
