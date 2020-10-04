import styled from "styled-components"
import media from "styled-media-query"
import { Whatsapp } from "@styled-icons/icomoon/Whatsapp"

export const ContactUSWrapped = styled.a`
  display: flex;
  align-items: center;
  order: 3;

  ${media.lessThan("medium")`
  order: 2;
  `}
`

export const WhatsappIcon = styled(Whatsapp)`
  width: 2rem;
  color: #790d19;
`

export const ContaactUSTextWrapped = styled.div`
  margin-left: 5px;
  text-transform: uppercase;
`

export const ContaactUSText = styled.p`
  font-weight: 900;
  line-height: 17px;
  font-size: 18px;
  color: #000;
  text-transform: uppercase;
`
