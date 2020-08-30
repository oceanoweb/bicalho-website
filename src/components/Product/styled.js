import styled from "styled-components"
import { Whatsapp } from "@styled-icons/icomoon/Whatsapp"

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 170px;
  height: 220px;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.3);
  margin: 20px;
  padding: 15px;
  border-radius: 5px;
  position: relative;
`
export const ProductDiscount = styled.div`
  position: absolute;
  top: -6px;
  left: -10px;
  background: #bd2130;
  width: 100px;
  display: flex;
  justify-content: center;
  color: white;
  font-weight: 700;
  transform: rotateZ(-10deg);
  &:after {
    content: "";
    border-top: 8px solid transparent;
    border-left: 15px solid #bd2130;
    border-bottom: 8px solid transparent;
    position: relative;
    left: 23px;
  }
`
export const ProductImage = styled.img`
  width: 130px;
  height: 100px;
`

export const ProductTitle = styled.h2`
  width: 100%;
`

export const ProductPrice = styled.p`
  width: 100%;
`

export const ProductButton = styled.a`
  background: #25d366;
  border-radius: 3px;
  padding: 2px 15px;
  display: flex;
`

export const WhatsappIcon = styled(Whatsapp)`
  width: 1rem;
  color: white;
  margin-right: 5px;
`

export const ProductButtonLabel = styled.p`
  color: white;
`
