import React from "react"

import * as S from "./styled"

const ContactUS = ({ show, isMenuOpen }) => {
  return (
    <S.ContactUSWrapped
      href="https://wa.me/5511000000000?text=Olá,%20meu%20amigo!"
      target="_blank"
      show={show}
      isMenuOpen={isMenuOpen}
    >
      <S.WhatsappIcon />
      <S.ContaactUSTextWrapped>
        <S.ContaactUSText isMenuOpen={isMenuOpen}>Fale</S.ContaactUSText>
        <S.ContaactUSText isMenuOpen={isMenuOpen}>Conosco!</S.ContaactUSText>
      </S.ContaactUSTextWrapped>
    </S.ContactUSWrapped>
  )
}

export default ContactUS
