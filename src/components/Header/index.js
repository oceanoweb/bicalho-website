import React from "react"

import Menu from "../Menu"
import Logo from "../Logo"

import * as S from "./styled"

const Header = () => (
  <S.HeaderWrapped>
    <Logo />
    <Menu />
    <S.ContactUSWrapped
      href="https://wa.me/5511000000000?text=Olá,%20meu%20amigo!"
      target="_blank"
    >
      <S.WhatsappIcon />
      <S.ContaactUSTextWrapped>
        <S.ContaactUSText>FALE</S.ContaactUSText>
        <S.ContaactUSText>CONOSCO!</S.ContaactUSText>
      </S.ContaactUSTextWrapped>
    </S.ContactUSWrapped>
  </S.HeaderWrapped>
)

export default Header
