import { Link } from "gatsby"
import styled from "styled-components"
import { Whatsapp } from "@styled-icons/icomoon/Whatsapp"

export const ProductWrapper = styled.div`
  position: relative;
`

export const Product = styled(Link)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 220px;
  height: 300px;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.3);
  margin: 20px;
  padding: 1rem;
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
  font-weight: 500;
  transform: rotateZ(-10deg);
  padding-left: 16px;

  &:after {
    content: "";
    border-top: 8px solid transparent;
    border-left: 15px solid #bd2130;
    border-bottom: 8px solid transparent;
    position: relative;
    left: 15px;
  }
`
export const ProductImage = styled.img`
  margin: 5px 0;
`

export const ProductTitle = styled.h2`
  width: 100%;
  margin-bottom: 0.3rem;
`

export const ProductPrice = styled.p`
  width: 100%;
  margin-bottom: 2rem;
`

export const HackNestedLink = styled.object``

export const ProductButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #25d366;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  position: absolute;
  bottom: 30px;
  left: 35px;
  right: 35px;
`

export const WhatsappIcon = styled(Whatsapp)`
  width: 1rem;
  color: white;
  margin-right: 5px;
`

export const ProductButtonLabel = styled.p`
  color: white;
  text-transform: uppercase;
`
