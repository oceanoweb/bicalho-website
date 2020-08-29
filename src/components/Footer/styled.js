import styled from "styled-components"
import { FacebookSquare } from "@styled-icons/boxicons-logos/FacebookSquare"
import { Instagram } from "@styled-icons/boxicons-logos/Instagram"
import { Whatsapp } from "@styled-icons/remix-fill/Whatsapp"
import { Americanexpress } from "@styled-icons/simple-icons/Americanexpress"

export const FooterWrapped = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`

export const FooterPhoneWrapped = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

export const FooterAddressWrapped = styled.div`
  margin-bottom: 1rem;
`

export const FooterSocialMediaWrapped = styled.div`
  margin-bottom: 1rem;
`

export const FooterSocialMediaIconsWrapped = styled.div``

export const FooterPayWithWrapped = styled.div`
  margin-bottom: 1rem;
`

export const FooterPayWithCardWrapped = styled.div`
  margin-bottom: 1rem;
`

export const FooterPayWithBankWrapped = styled.div``

export const FooterColumn = styled.div``

export const FooterTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 3px;
`

export const FooterPhone = styled.a`
  color: #000;
  margin-bottom: 3px;
`

export const FooterAddress = styled.p`
  margin-bottom: 3px;
  font-size: 0.9rem;
`

export const FacebookIcon = styled(FacebookSquare)`
  width: 2rem;
`

export const InstagramIcon = styled(Instagram)`
  width: 2rem;
`

export const WhatsappIcon = styled(Whatsapp)`
  width: 2rem;
`

export const AmericanexpressIcon = styled(Americanexpress)`
  width: 2rem;
  margin-right: 5px;
`
