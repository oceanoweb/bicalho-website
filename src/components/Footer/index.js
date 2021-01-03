import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        americanexpress: file(
          relativePath: { eq: "payment/americanexpress.png" }
        ) {
          childImageSharp {
            fixed(width: 32, height: 32) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        aura: file(relativePath: { eq: "payment/aura.png" }) {
          childImageSharp {
            fixed(width: 32, height: 32) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        boleto: file(relativePath: { eq: "payment/boleto.png" }) {
          childImageSharp {
            fixed(width: 32, height: 32) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        diners: file(relativePath: { eq: "payment/diners.png" }) {
          childImageSharp {
            fixed(width: 32, height: 32) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        elo: file(relativePath: { eq: "payment/elo.png" }) {
          childImageSharp {
            fixed(width: 32, height: 32) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        hipercard: file(relativePath: { eq: "payment/hipercard.png" }) {
          childImageSharp {
            fixed(width: 32, height: 32) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        mastercard: file(relativePath: { eq: "payment/mastercard.png" }) {
          childImageSharp {
            fixed(width: 32, height: 32) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        visa: file(relativePath: { eq: "payment/visa.png" }) {
          childImageSharp {
            fixed(width: 32, height: 32) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        brasilcard: file(relativePath: { eq: "payment/brasilcard.png" }) {
          childImageSharp {
            fixed(width: 32, height: 32) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <S.FooterWrapped>
      <S.FooterContent>
        <S.FooterColumn>
          <S.FooterPhoneWrapped>
            <S.FooterTitle>Contatos:</S.FooterTitle>
            <S.FooterPhone href="tel:553135333053">
              (31) 3533 - 3053
            </S.FooterPhone>
            <S.FooterPhone href="tel:553135216809">
              (31) 3521 - 6809
            </S.FooterPhone>
            <S.FooterPhone href="tel:553135331201">
              (31) 3533 - 1201
            </S.FooterPhone>
          </S.FooterPhoneWrapped>
          <S.FooterAddressWrapped>
            <S.FooterTitle>Unidades:</S.FooterTitle>
            <S.FooterAddress>
              R. Freitas de Oliveira, 175 - Alvoraada, Ibirité
            </S.FooterAddress>
            <S.FooterAddress>
              Av. São Paulo, 79 - Centro, Ibirité
            </S.FooterAddress>
            <S.FooterAddress>
              Av. São Paulo, 4428 - Jaçana, Ibirité
            </S.FooterAddress>
          </S.FooterAddressWrapped>
        </S.FooterColumn>
        <S.FooterColumn>
          <S.FooterSocialMediaWrapped>
            <S.FooterTitle>Redes Sociais:</S.FooterTitle>
            <S.FooterSocialMediaIconsWrapped>
              <S.SocialMediaLink
                href="https://www.facebook.com/mobiliadorabicalhooficial"
                target="_blank"
              >
                <S.FacebookIcon />
              </S.SocialMediaLink>
              <S.SocialMediaLink
                href="https://www.instagram.com/mobiliadorabicalho/"
                target="_blank"
              >
                <S.InstagramIcon />
              </S.SocialMediaLink>
              <S.SocialMediaLink
                href="https://wa.me/553186846705?text=Olá,%20sou%20cliente%20do%20site"
                target="_blank"
              >
                <S.WhatsappIcon />
              </S.SocialMediaLink>
            </S.FooterSocialMediaIconsWrapped>
          </S.FooterSocialMediaWrapped>
          <S.FooterPayWithWrapped>
            <S.FooterPayWithCardWrapped>
              <S.FooterTitle>pague com</S.FooterTitle>
              <S.PaymentImg
                fixed={data.americanexpress.childImageSharp.fixed}
                alt="American Express"
              />
              <S.PaymentImg
                fixed={data.aura.childImageSharp.fixed}
                alt="Aura"
              />
              <S.PaymentImg
                fixed={data.diners.childImageSharp.fixed}
                alt="Diners"
              />
              <S.PaymentImg fixed={data.elo.childImageSharp.fixed} alt="Elo" />
              <S.PaymentImg
                fixed={data.hipercard.childImageSharp.fixed}
                alt="Hipercard"
              />
              <S.PaymentImg
                fixed={data.mastercard.childImageSharp.fixed}
                alt="Mastercard"
              />
              <S.PaymentImg
                fixed={data.visa.childImageSharp.fixed}
                alt="Visa"
              />
              <S.PaymentImg
                fixed={data.brasilcard.childImageSharp.fixed}
                alt="Brasil Card"
              />
            </S.FooterPayWithCardWrapped>
            <S.FooterPayWithBankWrapped>
              <S.PaymentImg
                fixed={data.boleto.childImageSharp.fixed}
                alt="Boleto"
              />
            </S.FooterPayWithBankWrapped>
          </S.FooterPayWithWrapped>
        </S.FooterColumn>
      </S.FooterContent>
    </S.FooterWrapped>
  )
}

export default Footer
