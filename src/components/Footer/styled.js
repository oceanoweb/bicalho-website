import styled from "styled-components"
import media from "styled-media-query"

import { FacebookSquare } from "@styled-icons/boxicons-logos/FacebookSquare"
import { Instagram } from "@styled-icons/boxicons-logos/Instagram"
import { Whatsapp } from "@styled-icons/remix-fill/Whatsapp"
import { Americanexpress } from "@styled-icons/simple-icons/Americanexpress"

export const FooterWrapped = styled.footer`
  background: #f2f2f2;
`

export const FooterContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.5rem 1.0875rem 1.5rem;
  display: flex;
  justify-content: end;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`
export const FooterColumn = styled.div`
  width: 50%;

  ${media.lessThan("medium")`
    width: 100%;
    display: flex;
    justify-content: end;
  `}

  ${media.lessThan("small")`
    flex-direction: column;
  `}
`

export const FooterPhoneWrapped = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  ${media.lessThan("medium")`
    width: 50%;
  `}
`

export const FooterAddressWrapped = styled.div`
  margin-bottom: 1rem;

  ${media.lessThan("medium")`
    width: 50%;
  `}

  ${media.lessThan("small")`
    width: 100%;
  `}
`

export const FooterSocialMediaWrapped = styled.div`
  margin-bottom: 1rem;

  ${media.lessThan("medium")`
    width: 50%;
  `}
`

export const FooterSocialMediaIconsWrapped = styled.div``

export const FooterPayWithWrapped = styled.div`
  margin-bottom: 1rem;

  ${media.lessThan("medium")`
    width: 50%;
  `}

  ${media.lessThan("small")`
    width: 100%;
  `}
`

export const FooterPayWithCardWrapped = styled.div`
  margin-bottom: 1rem;
`

export const FooterPayWithBankWrapped = styled.div``

export const FooterTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 5px;
`

export const FooterPhone = styled.a`
  font-weight: 100;
  margin-bottom: 5px;
`

export const FooterAddress = styled.p`
  font-weight: 100;
  margin-bottom: 5px;
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
