import React from "react"

import * as S from "./styled"

const ContactUS = ({ show, isMenuOpen }) => {
  return (
    <S.ContactUSWrapped
      href="https://wa.me/553186846705?text=Olá,%20sou%20cliente%20do%20site"
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
