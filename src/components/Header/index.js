import React from "react"
import Menu from "../Menu"

import * as S from "./styled"

const Header = () => (
  <S.HeaderWrapped>
    <div>Bicalho</div>
    <Menu />
    <S.ContaactUSWrapped href="https://wa.me/5511000000000?text=Olá,%20meu%20amigo!">
      <S.WhatsappIcon />
      <S.ContaactUSTextWrapped>
        <S.ContaactUSText>FALE</S.ContaactUSText>
        <S.ContaactUSText>CONOSCO!</S.ContaactUSText>
      </S.ContaactUSTextWrapped>
    </S.ContaactUSWrapped>
  </S.HeaderWrapped>
)

export default Header
