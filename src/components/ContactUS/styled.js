import styled from "styled-components"
import media from "styled-media-query"
import { Whatsapp } from "@styled-icons/icomoon/Whatsapp"

export const ContactUSWrapped = styled.a`
  display: ${props => (props.show ? "flex" : "none")};
  align-items: center;

  ${media.lessThan("medium")`
    display: ${props => (props.isMenuOpen ? "flex" : "none")};
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
  color: ${props => (props.isMenuOpen ? "#fff" : "#000")};
  text-transform: uppercase;
`
