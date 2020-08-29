import React from "react"

import * as S from "./styled"

const Footer = () => (
  <S.FooterWrapped>
    <S.FooterColumn>
      <S.FooterPhoneWrapped>
        <S.FooterTitle>Contatos:</S.FooterTitle>
        <S.FooterPhone href="tel:553135333053">(31) 3533 - 3053</S.FooterPhone>
        <S.FooterPhone href="tel:553135216809">(31) 3521 - 6809</S.FooterPhone>
        <S.FooterPhone href="tel:553135331201">(31) 3533 - 1201</S.FooterPhone>
      </S.FooterPhoneWrapped>
      <S.FooterAddressWrapped>
        <S.FooterTitle>Unidades:</S.FooterTitle>
        <S.FooterAddress>
          R. Freitas de Oliveira, 175 - Alvoraada, Ibirité
        </S.FooterAddress>
        <S.FooterAddress>Av. São Paulo, 79 - Centro, Ibirité</S.FooterAddress>
        <S.FooterAddress>Av. São Paulo, 4428 - Jaçana, Ibirité</S.FooterAddress>
      </S.FooterAddressWrapped>
    </S.FooterColumn>
    <S.FooterColumn>
      <S.FooterSocialMediaWrapped>
        <S.FooterTitle>Redes Sociais:</S.FooterTitle>
        <S.FooterSocialMediaIconsWrapped>
          <S.FacebookIcon />
          <S.InstagramIcon />
          <S.WhatsappIcon />
        </S.FooterSocialMediaIconsWrapped>
      </S.FooterSocialMediaWrapped>
      <S.FooterPayWithWrapped>
        <S.FooterPayWithCardWrapped>
          <S.FooterTitle>pague com</S.FooterTitle>
          <S.AmericanexpressIcon />
          <S.AmericanexpressIcon />
          <S.AmericanexpressIcon />
          <S.AmericanexpressIcon />
          <S.AmericanexpressIcon />
          <S.AmericanexpressIcon />
        </S.FooterPayWithCardWrapped>
        <S.FooterPayWithBankWrapped>
          <S.AmericanexpressIcon />
        </S.FooterPayWithBankWrapped>
      </S.FooterPayWithWrapped>
    </S.FooterColumn>
  </S.FooterWrapped>
)

export default Footer
