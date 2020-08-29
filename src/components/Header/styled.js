import styled from "styled-components"
import { Whatsapp } from "@styled-icons/icomoon/Whatsapp"

export const HeaderWrapped = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 10px solid #932330;
  border-bottom: 10px solid #932330;
  padding: 0.5rem;
`

export const ContaactUSWrapped = styled.a`
  display: flex;
`

export const WhatsappIcon = styled(Whatsapp)`
  width: 2rem;
  color: #932330;
`

export const ContaactUSTextWrapped = styled.div`
  margin-left: 5px;
`

export const ContaactUSText = styled.p`
  font-weight: 900;
  line-height: 17px;
  font-size: 18px;
  color: #000;
`
